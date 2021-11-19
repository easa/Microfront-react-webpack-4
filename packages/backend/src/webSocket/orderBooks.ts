import WebSocket from 'ws';

import { store } from '../redux/store';
// import { selectOrderBooks } from '../redux/slices/users/selectors';
import { logger } from '../logger';
import { selectUserOrderBooks } from '../redux/slices/orderBooks/orderBook.selectors';

// const USER_ID = 'userId';

const orderBookWebsocket = (ws: WebSocket) => {
  const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    // const orderBook = selectOrderBook(state, '5235');
    const value = selectUserOrderBooks(state);
    logger({ value });
    ws.send(JSON.stringify(state));
  });
  ws.on('close', () => {
    unsubscribe();
  });
};

export default orderBookWebsocket;
