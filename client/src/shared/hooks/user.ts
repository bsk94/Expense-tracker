import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const addUser = async (payload: any) =>
  await axios.post('http://localhost:4000/user/register', payload);

export const usePostUser = () => {
  const { data, mutateAsync } = useMutation(['register'], addUser);

  return { data, mutateAsync };
};

const logIn = (payload: any) =>
  axios.post('http://localhost:4000/user/login', payload).then((resp) => {
    const { token, refreshToken } = resp.data.body;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  });

export const useAuth = () => {
  const { data, mutateAsync } = useMutation(['login'], logIn);

  return { data, mutateAsync };
};
