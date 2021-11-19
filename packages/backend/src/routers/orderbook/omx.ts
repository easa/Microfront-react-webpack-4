// omx-stockholm
// https://www.avanza.se/index/om-indexet.html/19002/omx-stockholm-30
import express from 'express';
import avanza from '../../adapters/avanza/avanza';
import { logger } from '../../logger';

const OMXId = '19002';

const router = express.Router();
router.get('/omx', (req, res) => {
  // @ts-ignore
  avanza.getChartdata(OMXId, 'ONE_MONTH')
    .then((v: any) => {
      const last = v.dataSeries.length;
      const item = v.dataSeries[last - 1];
      res.send(`${item.value}`);
    }).catch((error) => {
      logger('can\'t read OMX', error);
      res.send('waiting!');
    });
});

export default router;
