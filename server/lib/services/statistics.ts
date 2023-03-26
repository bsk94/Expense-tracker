import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { FinanceModel } from '../models/Finance';

export const filterExpense = async (req: Request) => {
  let query = {};

  const typeOfFinance = req.params.financeType;
  const dates = req.params.dates;

  if (dates) {
    const datesFormatted = dates.split(',');
    const startDate = new Date(datesFormatted[0]).toISOString().slice(0, 10);
    const endDate = new Date(datesFormatted[1]).toISOString().slice(0, 10);

    query = {
      financeType: typeOfFinance,
      date: {
        $gte: startDate,
        $lte: endDate,
      },
    };
  } else {
    query = { financeType: typeOfFinance };
  }

  const result = await FinanceModel.find(query);

  if (!result) {
    throw new Error('Error while removing expenses from database');
  } else {
    return result;
  }
};
