import React, { Suspense } from 'react';
import { Switch, Router, Route } from "react-router-dom";
import { createBrowserHistory, History } from "history";
import MicroFrontend from "../../MicroFrontend";
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import SimpleMenu from '../header/header';
import useAuth from './useAuth';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#de1bb7',
    },
    secondary: {
      main: '#de1b1b',
    },
  },
});

// @ts-ignore
window.muiTheme = theme;

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_ORDER_HOST: orderHost,
  REACT_APP_STOCK_HOST: stockHost,
  REACT_APP_AUTH_HOST: authHost,
} = process.env;

function Order({ history }: { history: History }) {
  return <MicroFrontend history={history} host={orderHost} name="Order" />;
}

function Stock({ history }: { history: History }) {
  return <MicroFrontend history={history} host={stockHost} name="Stock" />;
}

function Auth({ history }: { history: History }) {
  return <MicroFrontend history={history} host={authHost} name="Auth" />;
}


function Home({ history }: { history: History }) {
  return (
    <div>
      <div>
        <Order history={defaultHistory} />
      </div>
      <div>
        <Stock history={defaultHistory} />
      </div>
    </div>
  );
}

function App() {
  const { user } = useAuth();
  return (
    <ThemeProvider theme={theme}>
      <Router history={defaultHistory}>
        <SimpleMenu />
        <Auth history={defaultHistory} />
        {user?.id &&
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route exact component={Home} path="/" />
              <Route path="/order">
                <Order history={defaultHistory} />
              </Route>
              <Route path="/stock">
                <Stock history={defaultHistory} />
              </Route>
            </Switch>
          </Suspense>
        }
      </Router>
    </ThemeProvider>
  )
}

export default App;
