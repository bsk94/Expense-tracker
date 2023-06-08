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

  const revenue = result.find((item) => item._id === 'revenue')?.total || 0;
  const expense = result.find((item) => item._id === 'expense')?.total || 0;

  const totalBalance = revenue - expense;

  if (!result) {
    throw Error('Error while fetching balance from database');
  } else {
    return totalBalance;
  }
};
