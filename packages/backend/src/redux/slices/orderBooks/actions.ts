/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { orderBookSubscribers } from './subscribers';
import type {
  Broker, Order, OrderDepth, State, UnsubscribeId,
} from './orderBook.types';

export const addOrderBookAction = (state: State, action: PayloadAction<{
  orderBookId: string; orderBookName: string; subscriptions: UnsubscribeId[]; broker: Broker;
}>) => {
  const {
    orderBookId, orderBookName, subscriptions, broker,
  } = action.payload;

  if (!state[orderBookId]) {
    state[orderBookId] = {
      broker,
      orderBookId,
      subscriptions,
      status: 'play',
      name: orderBookName,
    };
  }
};

export const removeOrderBookAction = (state: State, action: PayloadAction<{
  orderBookId: string;
}>) => {
  const { orderBookId } = action.payload;

  if (state[orderBookId]) {
    // unsubscribe
    state[orderBookId]?.subscriptions.forEach((id) => {
      if (orderBookSubscribers[id]) {
        orderBookSubscribers[id]();
        delete orderBookSubscribers[id];
      }
    });

    delete state[orderBookId];
  }
};

export const updateOrderDepthAction = (state: State, action: PayloadAction<{
  orderBookId: string; orderDepths: OrderDepth[];
}>) => {
  const { orderBookId, orderDepths } = action.payload;

  const item = state[orderBookId];
  if (item) {
    state[orderBookId] = {
      ...item,
      orderDepths,
    };
  }
};

export const updateOrdersAction = (state: State, action: PayloadAction<{
  orderBookId: string; orders: Order[];
}>) => {
  const { orderBookId, orders } = action.payload;

  const item = state[orderBookId];
  if (item) {
    state[orderBookId] = {
      ...item,
      orders,
    };
  }
};

export const addedOrderAction = (state: State, action: PayloadAction<{
  orderBookId: string; order: Order;
}>) => {
  const { orderBookId, order } = action.payload;

  const item = state[orderBookId];

  if (item) {
    const orders = item.orders ? [...item.orders, order] : [order];
    state[orderBookId] = {
      ...item,
      orders,
    };
  }
};

export const removedOrderAction = (state: State, action: PayloadAction<{
  orderBookId: string; orderId: string;
}>) => {
  const { orderBookId, orderId } = action.payload;

  const item = state[orderBookId];
  if (item) {
    const orders = item.orders?.filter((i) => i.orderId !== orderId);
    state[orderBookId] = {
      ...item,
      orders,
    };
  }
};
