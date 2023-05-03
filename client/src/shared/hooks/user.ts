import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const addUser = async (payload: any) =>
  await axios.post('http://localhost:4000/user/register', payload);

export const usePostUser = () => {
  const { data, mutateAsync } = useMutation(['register'], addUser);

  return { data, mutateAsync };
};
