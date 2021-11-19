import express from 'express';
import { subscribeOrderDepths } from '../../adapters';
import { updateOrderDepths, addOrderBook, removeOrderBook } from '../../redux/slices/orderBooks/orderBook.slice';
import { orderBookSubscribers } from '../../redux/slices/orderBooks/subscribers';
import { store } from '../../redux/store';

const router = express.Router();

router.post('/orderbook/subscribe', (req, res) => {
  const { orderBookId, orderBookName }: {
    orderBookId: string;
    orderBookName: string;
  } = req.body;
  if (!orderBookId) {
    return res.status(406).json({ error: 'Invalid Parameter' });
  }
  const unsubscribeOrderDepths = subscribeOrderDepths({
    broker: 'avanza',
    orderBookId,
    callback: (order) => {
      store.dispatch(updateOrderDepths({ orderBookId, orderDepths: order.levels }));
    },
  });

  const unsubscribeId = `sub ${Date.now()} ${(Math.random() * 10000).toFixed(0)}`;
  orderBookSubscribers[unsubscribeId] = unsubscribeOrderDepths;
  store.dispatch(addOrderBook({
    broker: 'avanza',
    orderBookId,
    orderBookName,
    subscriptions: [unsubscribeId],
  }));
  return res.json({ ok: 'ok' });
});

router.delete('/orderbook/subscribe/:orderBookId', (req, res) => {
  const { orderBookId }: { orderBookId: string } = req.params;
  store.dispatch(removeOrderBook({ orderBookId }));
  return res.json({ ok: 'ok' });
});

export default router;
