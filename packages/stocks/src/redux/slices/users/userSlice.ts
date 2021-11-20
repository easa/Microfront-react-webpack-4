/* eslint-disable no-param-reassign */
import {
  combineReducers, createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { Position } from 'avanza';
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
      userId: string, orderBookId: string, orderBookName: string, subscriptions: string[],
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
    updatePositions: (state, action: PayloadAction<{
      userId: string, positions: Position[],
    }>) => {
      const {
        userId, positions,
      } = action.payload;
      const item = state[userId];
      if (item) {
        positions.forEach(({
          orderbookId, averageAcquiredPrice, profitPercent, lastPrice, volume,
        }) => {
          const x = item.orderBooks[orderbookId];
          const status = x?.strategy?.id ? 'play' : 'pause';
          const position = {
            averageAcquiredPrice, profitPercent, lastPrice, volume,
          };
          if (item.orderBooks[orderbookId]) {
            item.orderBooks[orderbookId].position = position;
          } else {
            item.orderBooks[orderbookId] = {
              orderBookId: orderbookId,
              broker: 'bank1',
              status,
              subscriptions: [],
              position,
            };
          }
        });
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
  login, logout, addOrderBook, addOrderToOrderBook, addStrategyToOrderBook, updatePositions,
} = userSlice.actions;

export default userSlice.reducer;
