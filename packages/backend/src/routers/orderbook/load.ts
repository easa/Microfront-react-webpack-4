/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import express from 'express';
import mongoose from 'mongoose';
import { logger } from '../../logger';

const mongoUrl = process.env.MONGO_URL as string;

const router = express.Router();
mongoose.connect(mongoUrl).then().catch((e) => logger(e));

const orderBoockIdSchema = new mongoose.Schema({}, {
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    },
  },
});

const Book = mongoose.model('orderbookids', orderBoockIdSchema);

router.get('/load/stocks', (req, res) => {
  Book.find({}).then((book) => {
    res.json(book);
  });
});

router.get('/load/plans', (req, res) => {
  res.json([{ id: 'my_plan', title: '' }]);
});

export default router;
