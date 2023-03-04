import Router from './router';
import GlobalStyle, { StyledContainer } from './globalStyles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles/colorScheme';

function App() {
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
