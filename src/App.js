import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NotFoundPage from './pages/404';
import RickRollPage from './pages/rickRollPage';
import Header from './components/Header';
import AuthInitializer from './components/auth/AuthInitializer';

export default function App() {
  return (
    <AuthInitializer>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/page' exact component={RickRollPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </AuthInitializer>
  );
}