import { Application, Request, Response } from 'express';

export const appRoutes = (app: Application) => {
  // define a route handler for the default home page
  app.get('/', (req: Request, res: Response) => {
    res.render('index');
  });
};
