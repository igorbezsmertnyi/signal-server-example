import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { ChannelRepository } from '../repository/ChannelRepository';
import { generateChannelId } from '../services/generateChannelId';

export const createChannel = async (req: Request, res: Response) => {
  try {
    const token = await generateChannelId();
    const channelRepository = await getCustomRepository(ChannelRepository);
    const channel = await channelRepository.create();

    channel.token = await token;

    await channelRepository.save(channel);

    return await res.status(200).send({ channel });
  } catch (err) {
    return await res.status(422).send({ err });
  }
};

export const showChannel = async (req: Request, res: Response) => {
  try {
    const channelRepository = await getCustomRepository(ChannelRepository);
    const token = await req.params.channelId;
    const channel = await channelRepository.findByToken(token);

    if (typeof channel!.id !== 'number') {
      throw new Error('Chennel doesn\'t exists');
    }

    return await res.status(200).send({ channel });
  } catch (err) {
    return await res.status(404).send({ err });
  }
};
