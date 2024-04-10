import React from 'react';
import { Route } from 'wouter';

import GateKeeper from './components/GateKeeper';

// eslint-disable-next-line import/no-unresolved
import Nav from './components/Navbar';

import Login from './pages/Login';
import Home from './pages/Home';
import NewQuestion from './pages/NewQuestion';
import LeaderBoard from './pages/LeaderBoard';

function Pages() {
  return (
    <div>
      <GateKeeper publicPaths={['leaderboard']} />
      <Nav />
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
    </div>
  );
}
export default Pages;
