/* eslint-disable @typescript-eslint/no-unused-vars */
import type { OrderDepthsCallBack, Broker } from './adapter.types';

const brokers = {
  bank1: {
    orderDepth: (..._arg: any[]) => () => { },
  },
  bank2: {
    orderDepth: () => () => { },
  },
};

export const subscribeOrderDepths = ({ broker, orderBookId, callback }: {
  broker: Broker;
  orderBookId: string;
  callback: OrderDepthsCallBack
}) => brokers[broker].orderDepth(orderBookId, callback);

export const subOrderDepth2 = () => { };
