import express from 'express';
import userState from '../../strategy/application/state/userState';

import {
  addStrategyOrderBook, addSubscribeOrderBook, removeStrategyOrderBook,
} from '../../strategy/updates/subscribeOrderBook';

const router = express.Router();

router.post('/orderbook/activate', (req, res) => {
  const { orderBookId } = req.body;
  if (!orderBookId) {
    return res.status(406).json({ error: 'wrong parameters' });
  }
  const userStateLocal = userState('userId');
  const orderBook = userStateLocal.getOrderBook(orderBookId);
  if (orderBook) {
    return res.status(400).json({ error: 'already exists' });
  }
  // the ORDER BOOK activation
  userStateLocal.setOrderBook(orderBookId);
  addSubscribeOrderBook(orderBookId);
  return setTimeout(() => res.json({ orderBookId }), 1000);
});

router.post('/orderbook/strategy', (req, res) => {
  const { orderBookId, strategyName } = req.body;
  if (!orderBookId || !strategyName) {
    return res.status(406).json({ error: 'wrong parameters' });
  }
  const userStateLocal = userState('userId');
  const orderBook = userStateLocal.getOrderBook(orderBookId);
  if (!orderBook) {
    return res.status(400).json({ error: 'order book does\'t added yet!' });
  }
  if (orderBook.strategy) {
    return res.status(400).json({ error: 'already exists, first remove current strategy, then try again!' });
  }

  addStrategyOrderBook(orderBookId, strategyName);
  return setTimeout(() => res.json({ orderBookId }), 1000);
});

router.delete('/orderbook/strategy/:orderBookId', (req, res) => {
  const { orderBookId } = req.params;
  removeStrategyOrderBook(orderBookId);
  return setTimeout(() => res.json({ orderBookId }), 1000);
});

export default router;
