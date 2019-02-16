import { Application } from 'express';
import { createChannel, showChannel } from '../controllers/channelController';

export const channelRoutes = (app: Application) => {
  app.get('/:channelId', showChannel);
  app.post('/create', createChannel);
};
