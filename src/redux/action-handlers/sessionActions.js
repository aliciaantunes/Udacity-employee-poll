import { _getUsers } from '../../data/_DATA';
// eslint-disable-next-line import/no-unresolved
import { login, logout } from '../reducers/sessionReducer';

export const loginHandler = (username, password) => async (dispatch) => {
  try {
    const users = await _getUsers();
    const LoggedUser = Object.values(users).find(
      (user) => user.id === username && user.password === password
    );

    // add only the necessary data to the store
    dispatch(
      login({
        id: LoggedUser.id,
        name: LoggedUser.name,
        avatarURL: LoggedUser.avatarURL,
      })
    );

    // Navigate to a new page after successful login
    window.history.pushState(null, '', '/');
  } catch (error) {
    console.error(error);
  }
};

export const logoutHandler = () => async (dispatch) => {
  dispatch(logout());
};
