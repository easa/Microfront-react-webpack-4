
import React from 'react';
import Login from './login/login';
import useApp from './useApp';
import { ThemeProvider } from '@material-ui/core'

function App(props: { history?: unknown }) {
  // @ts-ignore
  const theme = window.muiTheme;
  const { user } = useApp();
  return (
    <ThemeProvider theme={theme}>
      {!user?.id && <Login />}
    </ThemeProvider>
  );
}

export default App;
