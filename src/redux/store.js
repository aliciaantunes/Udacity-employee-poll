import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './reducers/sessionReducer';
import questionsReducer from './reducers/questionsReducer';
import usersReducer from './reducers/usersReducer';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    questions: questionsReducer,
    users: usersReducer,
  },
});
export default store;
