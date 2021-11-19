import type { OrderDepthsCallBack } from './adapter.types';
import { subscribeToOrderDepths } from './avanza/subscribe';

type Broker = 'avanza' | 'pmc';

const brokers = {
  avanza: {
    orderDepth: subscribeToOrderDepths,
  },
  pmc: {
    orderDepth: () => () => { },
  },
};

export const subscribeOrderDepths = ({ broker, orderBookId, callback }: {
  broker: Broker;
  orderBookId: string;
  callback: OrderDepthsCallBack
}) => brokers[broker].orderDepth(orderBookId, callback);

export const subOrderDepth2 = () => { };
