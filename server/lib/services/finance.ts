import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { FinanceModel } from '../models/Finance';

interface Finance {
  name: string;
  date: Date;
  amount: number;
  financeType: 'expense' | 'revenue';
  expenseCategory?: 'Home' | 'Entertainment' | 'Other' | 'Food' | 'Transport';
  id: string;
}

export const addFinance = async (req: Request) => {
  console.log('aaa', req.body);
  const newFinance = new FinanceModel({
    name: req.body.name,
    date: req.body.date,
    amount: req.body.amount,
    financeType: req.body.financeType,
    expenseCategory: req.body.expenseCategory,
  });

  await newFinance.save();

  return {} as Finance;
};
