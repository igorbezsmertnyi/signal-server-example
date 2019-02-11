import * as uuidv4 from 'uuid/v4';

const channelIds: string[] = [];

export const createChannelId = async () => {
  const id = await uuidv4();

  if (channelIds.indexOf(id) > 0) {
    createChannelId();
  } else {
    channelIds.push(id);
  }

  return await id;
};

export const getChannelIds = () => channelIds;
