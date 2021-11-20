import { createDraftSafeSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

/* eslint-disable import/prefer-default-export */
const selectOrderBookId = (
  state: RootState,
  orderBookId: string,
) => state?.orderBooks[orderBookId];

export const selectOrderBook = createDraftSafeSelector(
  [selectOrderBookId],
  (state) => state,
);

const selectSelf = (state: RootState) => state;
export const selectUserOrderBooks = createDraftSafeSelector(
  selectSelf,
  (state) => {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const user = state.user['userId'];
    if (user) {
      const key = Object.keys(user.orderBooks);
      if (key) {
        return Object.values(state.orderBooks)
          .filter((i) => key.includes(i.orderBookId));
      }
    }
    return undefined;
  },
);
