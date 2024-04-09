import { _getQuestions, _getUsers, _saveQuestion } from '../../data/_DATA';
import { updateQuestions, addQuestion } from '../reducers/questionsReducer';
import { updateUsers } from '../reducers/usersReducer';

export const getQuestionsHandler = () => {
  console.log('Action Handler: Fetching questions...');
  return async (dispatch) => {
    try {
      console.log('Action Handler: Questions fetched');
      const payload = await _getQuestions();
      console.log('payload:', payload);
      dispatch(updateQuestions(payload)); 
    } catch (error) {
        console.error(error);
    }
  };
};
export const getUsersHandler = () => {
  console.log('Action Handler: Fetching Users...');
  return async (dispatch) => {
    try {
      console.log('Action Handler: Users fetched');
      const payload = await _getUsers();
      console.log('payload:', payload);
      dispatch(updateUsers(payload)); 
    } catch (error) {
        console.error(error);
    }
  };
};

export const addQuestionHandler = (question) => {
  console.log('Action Handler: Adding question...');
  return async (dispatch) => {
    try {
      console.log('Action Handler: Question added', question);
      console.log('Action Handler: Question added', question.optionOneText);
      const payload = await _saveQuestion(question);
      console.log('payload:', payload);

      dispatch(addQuestion(payload)); 
    } catch (error) {
        console.error(error);
    }
  };
}