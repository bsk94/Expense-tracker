import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { FinanceModel } from '../models/Finance';

export const getBalance = async () => {
  const result = await FinanceModel.aggregate([
    {
      $group: {
        _id: '$financeType',
        total: {
          $sum: '$amount',
        },
      },
    },
  ]);

  const revenue = result.find((item) => item._id === 'revenue')?.total;
  const expense = result.find((item) => item._id === 'expense')?.total;

  const totalBalance = revenue - expense;

  if (!totalBalance) {
    throw Error('Error while fetching balance from database');
  } else {
    return totalBalance;
  }
};
