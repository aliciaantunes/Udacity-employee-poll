/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { logoutHandler } from '../redux/action-handlers/sessionActions';

function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const logout = () => {
    dispatch(logoutHandler());
  };

  return (
    <nav className="flex justify-center space-x-4">
      <Link
        to="/"
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Home
      </Link>
      <Link
        to="/new"
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        New Poll
      </Link>
      <Link
        to="/leaderboard"
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Leaderboard
      </Link>
      {user && (
        <>
          <span
            className="font-medium px-3 py-2 text-slate-700"
            data-testid="user-information"
          >
            User: {user.name}
          </span>
          <button
            type="button"
            onClick={logout}
            className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
}
export default Nav;
