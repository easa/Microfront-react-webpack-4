
import React from 'react';
import Login from './login/login';
import useApp from './useApp';
// import { ThemeProvider } from '@material-ui/core'

function App() {
  // @ts-ignore

  // const theme = useMemo<any>(() => window.muiTheme, []);
  const { user } = useApp();
  return (
    // <ThemeProvider theme={theme}>
    <>
      {!user?.id && <Login />}
    </>
    // </ThemeProvider>
  );
}

export default App;
