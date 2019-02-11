import { Application } from 'express';
import { getHome } from '../controllers/homeController';

export const homeRoutes = (app: Application) => {
  app.get('/', getHome);
};
