// omx-stockholm
// https://www.avanza.se/index/om-indexet.html/19002/omx-stockholm-30
import express from 'express';
import avanza from '../../adapters/avanza/avanza';

const accountId = process.env.AVANZA_ACCOUNT as string;

const router = express.Router();

router.get('/orders', (req, res) => {
  avanza.getDealsAndOrders().then((xx) => {
    const result = xx.orders.map((order) => {
      const {
        orderId, price, volume, validUntil, status, type,
      } = order;
      const orderBookName = order.orderbook.name;
      const orderDateTime = new Date(order.orderDateTime).toISOString().slice(0, 19).replace('T', '  ');
      const transactionFees = order.transactionFees.commission;
      return {
        orderId,
        orderBookName,
        price,
        volume,
        orderDateTime,
        validUntil,
        transactionFees,
        status,
        type,
      };
    });
    res.json(result);
  });
});

// FIXME use broker instead of avanza
router.delete('/order/:orderId', (req, res) => avanza
  .deleteOrder(accountId, req.params.orderId)
  .then((result) => res.json(result)));

router.get('/order/:orderId', (req, res) => {
  const { orderId } = req.params;
  avanza.getOrder('stock', accountId, orderId)
    .then((v: any) => {
      const last = v.dataSeries.length;
      const item = v.dataSeries[last - 1];
      res.send(`${item.value}`);
    }).catch(() => {
      res.send('waiting!');
    });
});

export default router;
