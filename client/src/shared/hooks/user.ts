import { useMutation } from '@tanstack/react-query';
import axios from '../../utils/axiosConfig';

const addUser = async (payload: any) => await axios.post('/user/register', payload);

export const usePostUser = () => {
  const { data, mutateAsync } = useMutation(['register'], addUser);

  return { data, mutateAsync };
};

const logIn = (payload: any) =>
  axios.post('/user/login', payload).then((resp) => {
    const { token, refreshToken } = resp.data.body;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  });

export const useAuth = () => {
  const { data, mutateAsync } = useMutation(['login'], logIn);

  return { data, mutateAsync };
};
