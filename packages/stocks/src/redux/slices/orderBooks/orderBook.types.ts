import type {
  Broker, Level, OrderStatus, OrderType, RunningStatus, UnsubscribeId,
} from '../../types';

export type {
  Level as OrderDepth, Broker, UnsubscribeId, UnsubscribeFunction,
} from '../../types';

export interface Order {
  orderId: string; price: number; volume: number; type: OrderType; status: OrderStatus;
}

export interface OrderBook {
  broker: Broker;
  orderBookId: string;
  subscriptions: UnsubscribeId[];
  name?: string;
  status: RunningStatus;
  orderDepths?: Level[];
  orders?: Order[];
}

// orderBooks state
export interface State {
  [orderBookId: string]: OrderBook;
}
