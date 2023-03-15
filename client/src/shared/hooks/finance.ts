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

const fetchFinance = async (page: number) =>
  await axios.get(`http://localhost:4000/finance?p=${page}`).then((resp) => resp.data);

export const useFinance = (page: number) => {
  const { data, isLoading, isError, refetch } = useQuery(
    ['finance', page],
    () => fetchFinance(page),
    { keepPreviousData: true }
  );

  const financeData = data?.finance;
  const totalFinanceNumber = data?.total;
  const numberOfPages = data?.pages;

  return { financeData, totalFinanceNumber, numberOfPages, isLoading, isError, refetch };
};

const deleteItem = async (id: string) => await axios.delete(`http://localhost:4000/finance/${id}`);

export const useDeleteFinance = () => {
  const { mutateAsync } = useMutation(['finance'], deleteItem);

  return { mutateAsync };
};

const fetchFinanceItem = async (id: string) =>
  await axios.get(`http://localhost:4000/finance/${id}`).then((resp) => resp.data);

export const useSingleFinance = (id: string) => {
  const { data, isError } = useQuery(['finance', id], () => fetchFinanceItem(id));

  return { data, isError };
};

const updateItem = async (payload: any) =>
  await axios.patch(`http://localhost:4000/finance/${payload.id}`, payload);

export const useUpdateFinance = () => {
  const { mutateAsync } = useMutation(['finance'], updateItem);

  return { mutateAsync };
};
