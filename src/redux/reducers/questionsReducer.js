import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    updateQuestions: (state, action) => {
      // transform action.payload to an array
      const newQuestions = Object.values(action.payload);

      return newQuestions;
    },
    addQuestion: (state, action) => {
      state.push(action.payload);
    },
    updateAnswer: (state, action) => {
      const { question, answer } = action.payload;
      const questionToUpdate = state.find((q) => q.question === question);
      if (questionToUpdate) {
        questionToUpdate.answer = answer;
      }
    },
  },
});

export const { updateQuestions, addQuestion, removeQuestion, updateAnswer } =
  questionsSlice.actions;

export default questionsSlice.reducer;
