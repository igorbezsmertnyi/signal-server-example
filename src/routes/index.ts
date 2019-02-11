import { Application } from 'express';
import { channelRoutes } from './channelRoutes';
import { homeRoutes } from './homeRoutes';

export const routes = (app: Application) => {
  homeRoutes(app);
  channelRoutes(app);
};
