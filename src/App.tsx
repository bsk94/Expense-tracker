import Router from './router';
import GlobalStyle from './globalStyles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles/colorScheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
