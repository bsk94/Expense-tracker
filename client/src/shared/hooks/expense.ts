import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ExpenseItem } from '../../shared/types';

const addExpense = async (payload: ExpenseItem) =>
  await axios.post('http://localhost:4000/api/expense', payload);

export const usePostExpense = () => {
  const { data, mutateAsync } = useMutation(['expense'], addExpense);

  return { data, mutateAsync };
};
