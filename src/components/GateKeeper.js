import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'wouter';

function GateKeeper() {
  const user = useSelector((state) => state.session.user);
  const isUserAuthenticated = user && user.id;

  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (!isUserAuthenticated) {
      // Redirects to login page if user is not authenticated and the path is not public
      setLocation('/login');
    }
  }, [location, user]);

  return null;
}

export default GateKeeper;
