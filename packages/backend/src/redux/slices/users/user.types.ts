import type {
  Broker, Order, Position, RunningStatus,
} from '../../../types';

export type { Order } from '../../../types';

export interface Queue { volume: number; price: number; percent: number }
export interface Strategy { name: string; id: string }

export interface OrderBook {
  orderBookId: string;
  broker: Broker
  status: RunningStatus;
  position?: Position;
  subscriptions: string[];
  strategy?: Strategy;
  orders?: Order[];
}
export interface OrderBooks {
  [orderBookId: string]: OrderBook
}

export interface User {
  id: string;
  name: string;
  orderBooks: OrderBooks;
}
export interface UserState {
  [userId: string]: undefined | User
}
