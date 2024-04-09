import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      console.log("action.payload:", action.payload);
      const newQuestions = Object.values(action.payload);
      console.log("action.payload:", newQuestions);
      return newQuestions;
    },
  },
});

export const { updateUsers } = usersSlice.actions;
export default usersSlice.reducer;
