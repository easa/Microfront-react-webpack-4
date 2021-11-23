import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'uikit/dist/css/uikit.min.css';
import 'uikit';
import OrderBook from './components/OrderBook/Index';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Button } from '@material-ui/core'
function App() {
  return (
    <Provider store={store}>
      <Button variant="outlined"> hi </Button>
      <Button variant="contained" > hi </Button>
      <div
        className="uk-grid-width-small-1-2 uk-grid-width-medium-1-4 uk-grid-width-large-1-6 tm-grid-colors tm-grid-heights"
        data-uk-grid
      >
        <OrderBook name='Retailers of Washington' />
      </div>
    </Provider>
  );
}

export default App;
