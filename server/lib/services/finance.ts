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

export const getFinance = async (req: Request) => {
  const page: number = Number(req.query.p) || 1;
  const itemsPerPage: number = 4;

  const finance = await FinanceModel.find()
    .skip((page - 1) * itemsPerPage)
    .limit(itemsPerPage);

  const total = await FinanceModel.countDocuments();

  const pages = Math.ceil(total / itemsPerPage);

  if (!finance) {
    throw Error('Error while fetching expenses from database');
  } else {
    return { finance, total, pages };
  }
};

export const deleteFinance = async (id: string) => {
  const result = await FinanceModel.findByIdAndDelete(id);
  console.log(result);
  if (!result) {
    throw new Error('Error while removing expenses from database');
  } else {
    return result;
  }
};
