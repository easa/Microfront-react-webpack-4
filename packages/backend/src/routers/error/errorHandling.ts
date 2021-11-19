/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import type {
  NextFunction, Request, Response,
} from 'express';
import { logger } from '../../logger';

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  logger(404);
  res.status(404).json({ error: 'not found' });
});

router.use((error: string, req: Request, res: Response, next: NextFunction) => {
  logger(error);
  res.status(500).json({ error });
});

export default router;
