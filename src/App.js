import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFoundPage from './pages/404';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}