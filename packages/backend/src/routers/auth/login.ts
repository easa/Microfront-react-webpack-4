import express from 'express';
import { authenticate, getAccount } from '../../adapters/avanza/account';
import { login } from '../../redux/slices/users/userSlice';
import { store } from '../../redux/store';

const router = express.Router();

router.get('/login', (req, res) => getAccount('userId').then((i) => res.json(i)));

router.post('/login', (req, res) => {
  const userId = 'userId';
  return authenticate('userId').then((i) => {
    store.dispatch(login({ userId }));
    res.json(i);
  });
});
export default router;
