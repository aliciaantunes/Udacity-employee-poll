import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function RequireAuth({ children }) {
  const authed = useSelector((state) => state.session.user);

  const location = useLocation();

  return authed ? (
    children
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ path: location.pathname }}
    />
  );
}

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireAuth;
