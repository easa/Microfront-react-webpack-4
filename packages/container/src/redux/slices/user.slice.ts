/* eslint-disable no-param-reassign */
import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';

interface State {
  user?: {
    id: string;
    name: string;
    photo: string;
    token: string;
  };
  status: 'initial' | 'registered' | 'unregistered';
}

const initialState: State = { status: 'initial' };

export const userSlice = createSlice({
  name: 'orderBook',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const user = action.payload.user;
      state.user = user;
      state.status = 'registered';
    },
    unRegisterUser: (state) => {
      delete state.user;
      state.status = 'unregistered';
    },
  },
});

export const { registerUser, unRegisterUser } = userSlice.actions;

const selectSelf = (state: { user: State }) => state
export const userSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.user?.user
)

export default userSlice.reducer;
