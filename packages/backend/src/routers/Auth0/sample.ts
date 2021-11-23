/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import jwtAuthz from 'express-jwt-authz';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import { checkJwt } from '../../middlewares/auth';

const router = express.Router();

router.use(checkJwt);

router.get('/authorized', (req, res) => {
  res.send('Secured Resource');
});

export default router;
