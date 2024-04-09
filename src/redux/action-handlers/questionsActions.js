import { _getQuestions, _getUsers } from '../../data/_DATA';
import { updateQuestions } from '../reducers/questionsReducer';
import { updateUsers } from '../reducers/usersReducer';

export const getQuestionsHandler = () => async (dispatch) => {
    try {
      const payload = await _getQuestions();
      dispatch(updateQuestions(payload));
    } catch (error) {
      console.error(error);
    }
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