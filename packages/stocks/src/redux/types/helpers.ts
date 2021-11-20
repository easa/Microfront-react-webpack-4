export type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> };

export type OrderBook = {
  buyPrice: number;
  sellPrice: number;
  spread: number;
  highestPrice: number;
  lowestPrice: number;
  lastPrice: number;
  lastPriceUpdated: Date;
  name: string;
  id: string;
};

export type OrderParameters = {
  orderBookId: String;
  price: Number;
  volume: number;
  orderType: 'SELL' | 'BUY';
  validUntil: String;
};

export type Order = {
  price: number;
  volume: number;
  orderCondition: string;
  orderType: 'SELL' | 'BUY';
  validUntil: string;
};
