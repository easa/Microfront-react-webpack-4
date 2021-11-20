import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { OrderBooks, User, UserState } from './user.types';

const selectUser = (state: { user: UserState }, propsUser: string) => {
  const users = state.user;
  return users[propsUser];
};

export const selectOrderBooks = createDraftSafeSelector(
  [selectUser],
  (state) => state?.orderBooks,
);

const selectOrderBookId = (
  state: User,
  orderBookId: keyof OrderBooks,
) => state?.orderBooks[orderBookId];

export const selectOrderBook = createDraftSafeSelector(
  [selectUser, selectOrderBookId],
  (state) => state,
);
