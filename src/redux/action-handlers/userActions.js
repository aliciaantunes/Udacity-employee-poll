import { _getUsers } from '../../data/_DATA';
import { updateUsers } from '../reducers/usersReducer';

export const getUsersHandler = () => async (dispatch) => {
  try {
    const payload = await _getUsers();
    dispatch(updateUsers(payload));
  } catch (error) {
    console.error(error);
  }
};
