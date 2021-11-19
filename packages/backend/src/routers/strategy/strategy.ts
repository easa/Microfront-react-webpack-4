import express from 'express';

const strategies = [{ name: 'ok', id: 'ok' }];

const router = express.Router();

router.get('/strategies', (req, res) => {
  res.json({ strategies });
});

router.get('/strategy/:orderBookId', (req, res) => {
  const { orderBookId } = req.params;
  if (orderBookId) {
    res.json({ orderBookId });
  } else {
    res.status(406).json({ error: 'invalid parameter' });
  }
});

router.post('/strategy', (req, res) => {
  const { orderBookId, strategyName } = req.body;
  res.json({ orderBookId, strategyName });
});

router.delete('/strategy/:orderBookId', (req, res) => {
  res.json(strategies);
});

export default router;
