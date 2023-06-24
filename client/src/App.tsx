import Router from './router';
import GlobalStyle, { StyledContainer } from './globalStyles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles/colorScheme';
import { getToken } from './utils/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from './features/authSlice';

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
