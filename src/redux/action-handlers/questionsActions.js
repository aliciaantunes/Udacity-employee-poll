import { _getQuestions } from '../../data/_DATA';
import { updateQuestions } from '../reducers/questionsReducer';

export const getQuestionsHandler = () => async (dispatch) => {
    try {
      const payload = await _getQuestions();
      dispatch(updateQuestions(payload));
    } catch (error) {
      console.error(error);
    }
  };