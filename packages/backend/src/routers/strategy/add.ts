import express from 'express';
import { logger } from '../../logger';
import { strategies, strategyObjects } from '../../strategy/application/strategyHandler/getAllStrategies';

const router = express.Router();

const generateId = () => Math.random().toFixed(10).substr(3, 7);
const activePlans: {
  [x: string]: {
    unsubscribe: Function; params: Object; id: string; stockId: string; planName: string;
  }
} = {};

router.post('/plan/:planName/:stockId', (req, res) => {
  const { planName, stockId } = req.params;
  const params = req.body;

  const plan = strategies.find((p) => p.id === planName);
  if (plan) {
    return strategyObjects[planName].plan({ ...params, stockId }).then((unsubscribe) => {
      const id = generateId();
      activePlans[id] = {
        unsubscribe, id, stockId, params, planName,
      };
      logger('add new strategy #', id, planName);
      res.send(`${planName}#${stockId} added!, params: ${JSON.stringify(params)}`);
    }).catch((error) => {
      logger('add plan error:', error);
      return res.send('ERROR Strategy can\'t add');
    });
  }
  return res.send('ERROR Strategy Not Found!');
});

router.get('/runningplans', (req, res) => {
  const plansToShow = Object.values(activePlans)
    .map(({
      id, stockId, params, planName,
    }) => ({
      id, stockId, params, planName,
    }));
  res.json(plansToShow);
});

router.delete('/plan/:id', (req, res) => {
  const plan = activePlans[req.params.id];
  if (plan) {
    plan.unsubscribe();
    logger('delete strategy #', plan.id, plan.planName);
    delete activePlans[req.params.id];
    res.send('unsubscribed');
  } else {
    res.send('not existed');
  }
});

export default router;
