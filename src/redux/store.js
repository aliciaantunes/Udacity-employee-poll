import { configureStore } from "@reduxjs/toolkit";

import questionsReducer from "./reducers/questionsReducer";
import usersReducer from "./reducers/usersReducer";

const store = configureStore({
  reducer: {
    questions: questionsReducer,
    users: usersReducer,
  },
});

export default store;
