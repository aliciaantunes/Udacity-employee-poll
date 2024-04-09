import { useEffect } from 'react';
import { useLocation } from 'wouter';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function GateKeeper({ publicPaths = [] }) {
  const [location, setLocation] = useLocation();
  const isUserAuthenticated = () => !!localStorage.getItem('user');

  useEffect(() => {
    // look for the current path in the publicPaths array
    const pathIsPublic = publicPaths.some((path) => `/${path}` === location);
    if (!pathIsPublic && !isUserAuthenticated()) {
      // Redirects to login page if user is not authenticated and the path is not public
      setLocation('/login');
    }
  }, [location, publicPaths]);

  return null;
}

GateKeeper.propTypes = {
  publicPaths: PropTypes.arrayOf(PropTypes.string),
};

GateKeeper.defaultProps = {
  publicPaths: [],
};

export default GateKeeper;
