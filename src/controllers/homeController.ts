import { Request, Response } from 'express';

export const getHome = async (req: Request, res: Response) => {
  res.render('index');
};
