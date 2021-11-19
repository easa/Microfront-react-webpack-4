/* eslint-disable max-len */
import { Unsubscribe } from 'avanza';
import type { Level, Callback } from '../types';

export type OrderDepthsCallBack = Callback<{ totals: Level; levels: Level[]; }>;
export type SubscribeToOrderDepths = (orderBookId: string, callback: OrderDepthsCallBack) => Unsubscribe;
