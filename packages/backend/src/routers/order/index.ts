// omx-stockholm
import express from 'express';

const router = express.Router();

router.get('/orders', (req, res) => {
  const result = { orders: [] };
  res.json(result);
});

router.delete('/order/:orderId', (req, res) => {
  res.json({ ok: 'ok' });
});

router.get('/order/:orderId', (req, res) => {
  const { orderId } = req.params;
  res.json({ ok: 'ok', orderId });
});

export default router;
