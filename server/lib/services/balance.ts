import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { FinanceModel } from '../models/Finance';

export const getBalance = async () => {
  const expense = await FinanceModel.aggregate([
    { $match: { financeType: 'expense' } },
    {
      $group: {
        _id: '$financeType',
        total: {
          $sum: '$amount',
        },
      },
    },
  ]);

  const revenue = await FinanceModel.aggregate([
    { $match: { financeType: 'revenue' } },
    {
      $group: {
        _id: '$financeType',
        total: {
          $sum: '$amount',
        },
      },
    },
  ]);

  const totalBalance = revenue[0].total - expense[0].total;

  if (!totalBalance) {
    throw Error('Error while fetching balance from database');
  } else {
    return totalBalance;
  }
};
