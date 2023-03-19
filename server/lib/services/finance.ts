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

export const getSingleFinance = async (req: Request) => {
  const id = req.query;

  const finance = await FinanceModel.findById(id);

  if (!finance) {
    throw Error('Error while fetching expenses from database');
  } else {
    return finance;
  }
};

export const updateFinance = async (req: Request) => {
  if (!req.body) {
    throw new Error('Data to update can not be empty!');
  }

  const id = req.body._id;

  const result = await FinanceModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!result) {
    throw new Error('Error while updating on database');
  } else {
    return result;
  }
};

export const filterExpense = async (req: Request) => {
  let query;

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
