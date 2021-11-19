export interface Side { price: number; volume: number; volumePercent: number; }

export interface Level { buy: Side; sell: Side; }

export type Callback<T> = (prop: T) => void;

export type Broker = 'avanza' | 'pmc';

export type RunningStatus = 'play' | 'pause';

export type UnsubscribeFunction = () => void;

export type UnsubscribeId = string;

export type OrderStatus = 'inactive' | 'inaccurate' | 'market' | 'partial';

export type OrderType = 'BUY' | 'SELL';

export interface Position {
  averageAcquiredPrice: number;
  profitPercent: number;
  lastPrice: number;
  volume: number;
}
export interface Order {
  orderId: string;
  price: number;
  volume: number;
  type: OrderType;
  status: OrderStatus;
}
