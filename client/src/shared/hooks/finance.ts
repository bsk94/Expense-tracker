import { useMutation, useQuery } from '@tanstack/react-query';
import axios from '../../utils/axiosConfig';
import { ExpenseItem } from '../types';
import { RevenueItem } from '../../shared/types';
import { useInfiniteQuery } from '@tanstack/react-query';

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

export interface FetchFinanceProps {
  categoryPick: string;
  dateRange: string;
  currentFinType: 'all' | 'expense' | 'revenue';
}

export const useFinancePosts = ({ categoryPick, dateRange, currentFinType }: FetchFinanceProps) => {
  const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await axios.get(
      `http://localhost:4000/finance?p=${pageParam}&category=${categoryPick}&dates=${dateRange}&financeType=${currentFinType}`
    );
    return response.data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, refetch } =
    useInfiniteQuery(['finance', { categoryPick, dateRange, currentFinType }], fetchPosts, {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.finance.length ? allPages.length + 1 : undefined;
      }
    });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch
  };
};

const deleteItem = async (id: string) => await axios.delete(`http://localhost:4000/finance/${id}`);

export const useDeleteFinance = () => {
  const { mutateAsync } = useMutation(['finance'], deleteItem);

  return { mutateAsync };
};

const fetchFinanceItem = async (id: string) =>
  await axios.get(`http://localhost:4000/finance/${id}`).then((resp) => resp.data);

export const useSingleFinance = (id: string) => {
  const { data, isError } = useQuery(['financeSingle', id], () => fetchFinanceItem(id));

  return { data, isError };
};

const updateItem = async (payload: any) =>
  await axios.patch(`http://localhost:4000/finance/${payload.id}`, payload);

export const useUpdateFinance = () => {
  const { mutateAsync } = useMutation(['finance'], updateItem);

  return { mutateAsync };
};
