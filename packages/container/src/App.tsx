import React, { Suspense } from 'react';
import './App.css';
import { Switch, Router, Route } from "react-router-dom";
import { createBrowserHistory, History } from "history";
import MicroFrontend from "./MicroFrontend";
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
// import { ThemeProvider, createMuiTheme } from '@material-ui/styles';

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

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_HEADER_HOST: headerHost,
  REACT_APP_BLOGS_HOST: blogHost,
} = process.env;

function Order({ history }: { history: History }) {
  return <MicroFrontend history={history} host={headerHost} name="Order" />;
}

function Stock({ history }: { history: History }) {
  return <MicroFrontend history={history} host={blogHost} name="Stock" />;
}

function BlogDetail({ history }: { history: History }) {
  return (
    <div>
      <MicroFrontend history={history} host={blogHost} name="Stock" />
    </div>
  );
}


function Home({ history }: { history: History }) {

  return (
    <div
      className="uk-grid-width-small-1-2 uk-grid-width-medium-1-2 uk-grid-width-large-1-2 tm-grid-colors tm-grid-heights"
      data-uk-grid
    >
      <div>
        <Order history={defaultHistory} />
      </div>
      <div>
        <Stock history={defaultHistory} />
      </div>
    </div>
  );
}

// function App2() {
//   return (
//     <BrowserRouter>
//       <React.Fragment>
//         <Routes>
//           <Route path="/" element={<Home history={defaultHistory} />} />
//           <Route path="/blogdetail/:blogid" element={<BlogDetail history={defaultHistory} />} />
//         </Routes>
//       </React.Fragment>
//     </BrowserRouter>
//   );
// }
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={defaultHistory}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route path="/order">
              <Order history={defaultHistory} />
            </Route>
            <Route path="/stock">
              <Stock history={defaultHistory} />
            </Route>
            {/* <Route component={SelectCity} path="/select-city" />
          <Route component={CityPage} path="/:city" /> */}
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App;
