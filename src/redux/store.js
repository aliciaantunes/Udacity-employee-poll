import { configureStore } from '@reduxjs/toolkit';

import questionsReducer from './reducers/questionsReducer';

const store = configureStore({
    reducer: {
        questions: questionsReducer,
    },
});

export default store;