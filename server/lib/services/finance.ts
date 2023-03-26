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
  let query = {};

  const financeType = req.query.financeType;
  const dates = req.query.dates as string;
  const category = req.query.category;
  const page = Number(req.query.p) || 1;

  const itemsPerPage = 4;

  if (financeType) {
    if (financeType === 'all') {
      query = {};
    } else {
      query = { financeType: financeType };
    }
  }

  if (dates) {
    const datesFormatted = dates.split(',');
    const startDate = new Date(datesFormatted[0]).toISOString().slice(0, 10);
    const endDate = new Date(datesFormatted[1]).toISOString().slice(0, 10);

    query = {
      ...query,
      date: {
        $gte: startDate,
        $lte: endDate,
      },
    };
  }

  if (category) {
    query = { ...query, expenseCategory: category };
  }

  const finance = await FinanceModel.find(query)
    .skip((page - 1) * itemsPerPage)
    .limit(itemsPerPage)
    .sort({ date: -1 });

  const total = await FinanceModel.countDocuments(query);

  const pages = Math.ceil(total / itemsPerPage);

  if (!finance) {
    throw Error('Error while fetching expenses from database');
  } else {
    return { finance, total, pages };
  }
};

export const deleteFinance = async (id: string) => {
  const result = await FinanceModel.findByIdAndDelete(id);
  if (!result) {
    throw new Error('Error while removing expenses from database');
  } else {
    return result;
  }
};

export const getSingleFinance = async (id: string) => {
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
