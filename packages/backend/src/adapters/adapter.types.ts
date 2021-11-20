/* eslint-disable max-len */
import type { Level, Callback } from '../types';

export type OrderDepthsCallBack = Callback<{ totals: Level; levels: Level[]; }>;
export type SubscribeToOrderDepths = (orderBookId: string, callback: OrderDepthsCallBack) => Unsubscribe;
type Unsubscribe = () => void;
export type Broker = 'bank1' | 'bank2';
