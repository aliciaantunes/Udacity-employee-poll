/* eslint-disable no-param-reassign */

// No param reassign is disabled because Immer is used to handle state changes
// please see: https://redux-toolkit.js.org/usage/immer-reducers

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { login, logout } = sessionSlice.actions;
export default sessionSlice.reducer;
