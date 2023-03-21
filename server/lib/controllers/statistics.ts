import { Request, Response, NextFunction } from 'express';
import { statisticsService } from '../services';

export const filterExpense = async (req: Request, res: Response) => {
  try {
    const finance = await statisticsService.filterExpense(req);

    return res.status(200).send(finance);
  } catch (err: any) {
    return res
      .status(500)
      .send('Internal server error, please contact support');
  }
};
