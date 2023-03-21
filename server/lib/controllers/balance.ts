import { Request, Response, NextFunction } from 'express';
import { balanceService } from '../services';

export const getBalance = async (req: Request, res: Response) => {
  try {
    const balance = await balanceService.getBalance();

    return res.status(200).send({ balance });
  } catch (err: any) {
    return res
      .status(500)
      .send('Internal server error, please contact support');
  }
};
