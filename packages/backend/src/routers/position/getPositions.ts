import express from 'express';
import update from '../../strategy/updates/update';
import avanza from '../../adapters/avanza/avanza';
import { logger } from '../../logger';
import { store } from '../../redux/store';
import { updatePositions } from '../../redux/slices/users/userSlice';

const router = express.Router();

router.get('/positions', (req, res, next) => {
  update();
  next();
}, (req, res) => avanza.getPositions()
  .then((positions) => {
    const poses = positions.instrumentPositions[0].positions;
    store.dispatch(updatePositions({ userId: 'userId', positions: poses }));
    res.json(positions);
  })
  .catch((error) => {
    logger('get Position --- ', error);
    res.end('');
  }));

router.get('/position/:id', (req, res) => {
  const stockId = req.params.id;
  avanza.subscribe('positions', stockId, (quote) => {
    // @ts-ignore
    logger(quote);
  });
  return avanza.getPositions().then((position) => {
    res.send(position);
  }).catch((error) => {
    res.send(error);
  });
});

export default router;
