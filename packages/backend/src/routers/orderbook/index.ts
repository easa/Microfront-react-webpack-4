import express from 'express';
import { OrderBook } from '../../types/helpers';

const router = express.Router();

router.get('/load/stocks', (req, res) => {
  const book: OrderBook[] = [{
    id: '1',
    name: 'omx',
    buyPrice: 20,
    highestPrice: 30,
    lastPrice: 23,
    lastPriceUpdated: new Date(),
    lowestPrice: 18,
    sellPrice: 26,
    spread: 3,
  }];
  res.json(book);
});

router.get('/load/plans', (req, res) => {
  res.json([{ id: 'my_plan', title: '' }]);
});

export default router;
