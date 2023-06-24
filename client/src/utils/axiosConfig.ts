import axios from 'axios';
import { getToken, getRefreshToken, removeTokens } from './auth';
import { setAuth } from '../features/authSlice';
import store from '../app/store';

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers = config.headers ?? {};

    if (token) {
      config.headers['authorization'] = token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== 'http://localhost:4000/user/login' && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const resp = await axios.post('http://localhost:4000/user/refreshtoken', {
            refreshToken: getRefreshToken()
          });

          const { token } = resp.data;

          localStorage.setItem('token', token);

          return axios(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    removeTokens();
    store.dispatch(setAuth(false));

    return Promise.reject(err);
  }
);

export default axios;
