import { useQuery } from '@tanstack/react-query';
import axios from '../../utils/axiosConfig';

const fetchFinanceStatistics = async (dates: string) =>
  await axios.get(`http://localhost:4000/statistics/expense/${dates}`).then((resp) => resp.data);

export const useFinanceStatistics = (dates: string) => {
  const { data } = useQuery(['financeDetails', dates], () => fetchFinanceStatistics(dates));

  return { data };
};
