import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
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
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/new"
            element={
              <RequireAuth>
                <NewQuestion />
              </RequireAuth>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <RequireAuth>
                <LeaderBoard />
              </RequireAuth>
            }
          />
          <Route
            path="/questions/:id"
            element={
              <RequireAuth>
                <Poll />
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Pages;
