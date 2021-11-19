import { UnsubscribeFunction } from './orderBook.types';

/* eslint-disable import/prefer-default-export */
export const orderBookSubscribers: { [key: string]: UnsubscribeFunction } = {};
