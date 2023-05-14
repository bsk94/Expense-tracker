import Router from './router';
import GlobalStyle, { StyledContainer } from './globalStyles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles/colorScheme';
import axios from 'axios';
import { getRefreshToken, getToken, removeTokens } from './utils/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from './features/authSlice';

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
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== 'http://localhost:4000/user/login' && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        //  originalConfig._retry = true;

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

    return Promise.reject(err);
  }
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();

    if (token && token?.length > 5) {
      dispatch(setAuth(true));
    }
  }, []);

  return (
    <StyledContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </StyledContainer>
  );
}

export default App;
