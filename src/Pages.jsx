import React from 'react';
import { Route, Switch } from 'wouter';
import GateKeeper from './components/GateKeeper';
import Nav from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import NewQuestion from './pages/NewQuestion';
import LeaderBoard from './pages/LeaderBoard';
import Poll from './pages/Poll';
import NotFound from './pages/404';

function Pages() {
  return (
    <div>
      <GateKeeper publicPaths={[]} />
      <Nav />
      <Switch>
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
        <Route
          path="/questions/:id"
          component={Poll}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
export default Pages;
