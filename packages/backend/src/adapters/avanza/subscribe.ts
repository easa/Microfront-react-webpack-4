import type {
  Brokertradesummary, Callback, Quote, Trades,
} from 'avanza';
import { SubscribeToOrderDepths } from '../adapter.types';
import avanza from './avanza';

export const subscribeToTrades = (orderBookId: string, callback: Callback<Trades>) => avanza.subscribe('trades', orderBookId, callback);
export const subscribeToQuotes = (orderBookId: string, callback: Callback<Quote>) => avanza.subscribe('quotes', orderBookId, callback);
export const subscribeToBroker = (orderBookId: string, callback: Callback<Brokertradesummary>) => avanza.subscribe('brokertradesummary', orderBookId, callback);

export const subscribeToOrderDepths: SubscribeToOrderDepths = (orderBookId, callback) => avanza.subscribe('orderdepths', orderBookId, ({
  levels,
  totalLevel: { buySide, sellSide },
}) => {
  callback({
    levels: levels.map(({ buySide: buy, sellSide: sell }) => ({ buy, sell })),
    totals: { buy: buySide, sell: sellSide },
  });
});
