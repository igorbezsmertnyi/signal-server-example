import { Request, Response } from 'express';

export const getHome = async (req: Request, res: Response) => {
  res.send('This\'s Peer to Peer signal server');
};
