import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFoundPage from './pages/404';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}