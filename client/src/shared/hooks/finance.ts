import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ExpenseItem } from '../types';
import { RevenueItem } from '../../shared/types';

const addExpense = async (payload: ExpenseItem) =>
  await axios.post('http://localhost:4000/finance', payload);

export const usePostExpense = () => {
  const { data, mutateAsync } = useMutation(['finance'], addExpense);

  return { data, mutateAsync };
};

const addRevenue = async (payload: RevenueItem) =>
  await axios.post('http://localhost:4000/finance', payload);

export const usePostRevenue = () => {
  const { data, mutateAsync } = useMutation(['finance'], addRevenue);

  return { data, mutateAsync };
};

const fetchFinance = async () =>
  await axios.get('http://localhost:4000/finance').then((resp) => resp.data);

export const useFinance = () => {
  const { data, isLoading, isError, refetch } = useQuery(['finance'], fetchFinance);

  return { data, isLoading, isError, refetch };
};
