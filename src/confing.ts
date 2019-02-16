import { Application } from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as logger from 'morgan';

const dev = process.env.NODE_ENV !== 'production';

export const config = (app: Application) => {
  dotenv.load();

  app.use(cors());

  if (dev) {
    app.use(logger('dev'));
  }
};
