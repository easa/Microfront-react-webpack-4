/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { State } from './orderBook.types';
import {
  addOrderBookAction,
  addedOrderAction,
  removedOrderAction,
  updateOrderDepthAction,
  updateOrdersAction,
  removeOrderBookAction,
} from './actions';

const initialState: State = {};

export const userSlice = createSlice({
  name: 'orderBook',
  initialState,
  reducers: {
    // order book itself
    addOrderBook: addOrderBookAction,
    removeOrderBook: removeOrderBookAction,

    // the order depths of order book
    updateOrderDepths: updateOrderDepthAction,

    // the orders on order book
    addedOrder: addedOrderAction,
    removedOrder: removedOrderAction,
    updateOrders: updateOrdersAction,

    // TODO strategy and POSITION will be on the user slice
  },
});

export const {
  addOrderBook,
  removeOrderBook,
  updateOrderDepths,
  addedOrder,
  removedOrder,
  updateOrders,

} = userSlice.actions;

export default userSlice.reducer;
