import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ExpenseItem } from '../types';
import { RevenueItem } from '../../shared/types';

const addExpense = async (payload: ExpenseItem) =>
  await axios.post('http://localhost:4000/finance', payload);

export const usePostExpense = () => {
  const { data, mutateAsync } = useMutation(['expense'], addExpense);

  return { data, mutateAsync };
};

const addRevenue = async (payload: RevenueItem) =>
  await axios.post('http://localhost:4000/finance', payload);

export const usePostRevenue = () => {
  const { data, mutateAsync } = useMutation(['revenue'], addRevenue);

  return { data, mutateAsync };
};
