import { Request, Response, NextFunction } from 'express';
import { financeService } from '../services';

export const addFinance = async (req: Request, res: Response) => {
  try {
    const financeCreated = await financeService.addFinance(req);
    console.log('bbb', financeCreated);
    return res.status(200).send({ data: financeCreated });
  } catch (err: any) {
    return res.status(500).send(`Internal server error, ${err.message}`);
  }
};
