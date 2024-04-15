import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHistory } from 'react-router-dom';

function GateKeeper() {
  const user = useSelector((state) => state.session.user);
  const isUserAuthenticated = user && user.id;

  const history = useHistory();

  useEffect(() => {
    if (!isUserAuthenticated) {
      // Redirects to login page if user is not authenticated and the path is not public
      history.push('/login');
    }
  }, [history, user]);

  return null;
}
export default GateKeeper;
