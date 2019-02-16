import { getCustomRepository } from 'typeorm';
import * as uuidv4 from 'uuid/v4';
import { ChannelRepository } from '../repository/ChannelRepository';

export const generateChannelId = async () => {
  const channelRepository = getCustomRepository(ChannelRepository);
  const id = await uuidv4();
  const channelId = await channelRepository.findByToken(id);

  if (typeof channelId !== 'undefined') {
    generateChannelId();
  }

  return await id;
};
