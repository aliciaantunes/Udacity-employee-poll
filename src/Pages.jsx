import React from 'react';
import { Route, Link } from 'wouter';

import GateKeeper from './components/GateKeeper';

import Login from './pages/Login';
import Home from './pages/Home';
import NewQuestion from './pages/NewQuestion';
import LeaderBoard from './pages/LeaderBoard';

function Pages() {
  return (
    <div>
      <GateKeeper publicPaths={['leaderboard']} />
      <Route
        path="/login"
        component={Login}
      />
      <Route
        path="/"
        component={Home}
      />
      <Route
        path="/new"
        component={NewQuestion}
      />
      <Route
        path="/leaderboard"
        component={LeaderBoard}
      />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/new">New Question</Link>
          </li>
          <li>
            <Link to="/leaderboard">LeaderBoard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pages;
