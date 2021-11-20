import { configureStore } from '@reduxjs/toolkit';
import orderBookReducer from './slices/orderBooks/orderBook.slice';

export const store = configureStore({
  // TODO Avoid unserializable items
  reducer: {
    orderBooks: orderBookReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
