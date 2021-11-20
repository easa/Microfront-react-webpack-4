import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory, History } from "history";
import MicroFrontend from "./MicroFrontend";
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
    <div className="container">
      <Order history={defaultHistory} />
      <Stock history={defaultHistory} />
    </div>
  );
}

function App2() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home history={defaultHistory} />} />
          <Route path="/blogdetail/:blogid" element={<BlogDetail history={defaultHistory} />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App2;
