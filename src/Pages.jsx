import React from 'react';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Router>
        <Nav />
        <GateKeeper />
        <Switch>
          <Route
            exact
            path="/"
          >
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/new">
            <NewQuestion />
          </Route>
          <Route path="/leaderboard">
            <LeaderBoard />
          </Route>
          <Route path="/questions/:id">
            <Poll />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default Pages;
