import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../../data/_DATA';
import { updateQuestions, addQuestion } from '../reducers/questionsReducer';

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

    // Navigate to a new page after successful creating a new question
    window.history.pushState(null, '', '/');
  } catch (error) {
    console.error(error);
  }
};

export const addQuestionAnswerHandler = (question) => async (dispatch) => {
  const { authedUser, qid, answer } = question;
  try {
    const payload = await _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    });

    dispatch(addQuestion(payload));

    // Navigate to a new page after successful creating a new question
    window.history.pushState(null, '', '/');
  } catch (error) {
    console.error(error);
  }
};
