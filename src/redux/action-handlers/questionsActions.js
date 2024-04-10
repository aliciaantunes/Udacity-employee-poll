/* eslint-disable prettier/prettier */
import { _getQuestions, _saveQuestion } from "../../data/_DATA";
import { updateQuestions, addQuestion } from "../reducers/questionsReducer";

export const getQuestionsHandler = () => async (dispatch) => {
  try {
    const payload = await _getQuestions();
    dispatch(updateQuestions(payload));
  } catch (error) {
    console.error(error);
  }
};

export const addQuestionHandler = (question) => async (dispatch) => {
  try {
    const payload = await _saveQuestion(question);
    dispatch(addQuestion(payload));
  } catch (error) {
    console.error(error);
  }
};