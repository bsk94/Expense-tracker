import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { RevenueItem } from '../../shared/types';

const addRevenue = async (payload: RevenueItem) =>
  await axios.post('http://localhost:4000/api/revenue', payload);

export const usePostRevenue = () => {
  const { data, mutateAsync } = useMutation(['revenue'], addRevenue);

  return { data, mutateAsync };
};
