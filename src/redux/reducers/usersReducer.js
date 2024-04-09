import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action) => action.payload,
  },
});
export const { updateUsers } = usersSlice.actions;

export default usersSlice.reducer;