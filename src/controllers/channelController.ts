import { Request, Response } from 'express';
import { createChannelId, getChannelIds } from '../services/channels';

export const createChannel = async (req: Request, res: Response) => {
  try {
    const token = await createChannelId();
    return await res.status(200).send({ url: token });
  } catch (err) {
    return await res.status(422).render('index', { err });
  }
};

export const showChannel = async (req: Request, res: Response) => {
  try {
    const channelId = await req.params.channelId;
    const channelIds = await getChannelIds();

    if (channelIds.indexOf(channelId) === -1) {
      throw new Error('Chennel doesn\'t exists');
    }

    return await res.render('room', { channelId });
  } catch (err) {
    return await res.status(404).redirect('/');
  }
};
