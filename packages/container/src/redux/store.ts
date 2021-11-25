import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';
import appReducer from './slices/app.slice';
import { userMiddleware } from './middlewares/user.mid'

export const store = configureStore({
  // TODO Avoid unserializable items
  reducer: {
    user: userReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    userMiddleware
  ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
