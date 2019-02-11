import * as express from 'express';
import { Application } from 'express';
import { staticPath, viewsPath } from './paths';

export const settings = (app: Application) => {
  app.set('views', viewsPath);
  app.set('view engine', 'ejs');
  app.use('/static', express.static(staticPath));
};
