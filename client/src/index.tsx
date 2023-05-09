import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import { getRefreshToken, getToken, removeTokens } from './utils/auth';

const queryClient = new QueryClient();

axios.interceptors.request.use(
  (config) => {
    console.log('hii');
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
    console.log('fff', res);
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== 'http://localhost:4000/user/login' && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
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

    return Promise.reject(err);
  }
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </React.StrictMode>
    </QueryClientProvider>
  </Provider>
);
