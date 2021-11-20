/* eslint-disable no-param-reassign */
import {
  combineReducers, createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { Order, Strategy, UserState } from './user.types';

const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ userId: string }>) => {
      state[action.payload.userId] = { id: action.payload.userId, name: 'hi', orderBooks: {} };
    },
    logout: (state, action: PayloadAction<{ userId: string }>) => {
      state[action.payload.userId] = undefined;
    },
    addOrderBook: (state, action: PayloadAction<{
      userId: string, orderBookId: string, subscriptions: string[],
    }>) => {
      const {
        userId, orderBookId, subscriptions,
      } = action.payload;
      const item = state[userId];
      if (item) {
        item.orderBooks[orderBookId] = {
          orderBookId, status: 'play', subscriptions, broker: 'bank1',
        };
      }
    },
    addStrategyToOrderBook: (state, action: PayloadAction<{
      userId: string, orderBookId: string, strategy: Strategy
    }>) => {
      const {
        userId, orderBookId, strategy,
      } = action.payload;
      const item = state[userId];
      if (item) {
        item.orderBooks[orderBookId].strategy = strategy;
      }
    },
    addOrderToOrderBook: (state, action: PayloadAction<{
      userId: string, orderBookId: string, order: Order,
    }>) => {
      const {
        userId, orderBookId, order,
      } = action.payload;
      const item = state[userId];
      if (item) {
        item.orderBooks[orderBookId].orders?.push(order);
      }
    },
  },
});

export const {
  login, logout, addOrderBook, addOrderToOrderBook, addStrategyToOrderBook,
} = userSlice.actions;

export default userSlice.reducer;
