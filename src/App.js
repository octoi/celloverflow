import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Application from './pages/Application';
import Login from './pages/Login';
import NotFoundPage from './pages/404';
import RickRollPage from './pages/rickRollPage';
import Settings from './pages/Settings';
import User from './pages/User';
import Header from './components/Header';
import AuthInitializer from './components/auth/AuthInitializer';

export default function App() {
  return (
    <AuthInitializer>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/app' exact component={Application} />
          <Route path='/login' exact component={Login} />
          <Route path='/settings' exact component={Settings} />
          <Route path='/user/:username' exact component={User} />
          <Route path='/page' exact component={RickRollPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </AuthInitializer>
  );
}