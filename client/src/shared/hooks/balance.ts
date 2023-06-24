import { useQuery } from '@tanstack/react-query';
import axios from '../../utils/axiosConfig';

const fetchBalance = async () =>
  await axios.get(`http://localhost:4000/balance`).then((resp) => resp.data);

export const useBalance = () => {
  const { data, isError, refetch } = useQuery(['financeBalance'], fetchBalance);

  const balance = data?.balance;

  return { balance, isError, refetch };
};
