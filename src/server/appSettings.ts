import * as express from 'express';
import { Application } from 'express';
import { staticPath, viewsPath } from './paths';

export const appSettings = (app: Application) => {
  app.use('/static', express.static(staticPath));

  app.set('views', viewsPath);
  app.set('view engine', 'ejs');
};
