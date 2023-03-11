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

export const getFinance = async (req: Request, res: Response) => {
  try {
    const finance = await financeService.getFinance(req);

    return res.status(200).send(finance);
  } catch (err: any) {
    return res
      .status(500)
      .send('Internal server error, please contact support');
  }
};

export const deleteFinance = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const expenses = await financeService.deleteFinance(id);

    return res.status(200).send('User was found');
  } catch (error: any) {
    return res
      .status(500)
      .send('Internal server error, please contact support');
  }
};
