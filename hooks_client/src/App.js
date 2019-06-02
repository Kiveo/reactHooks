import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Users, NoMatch } from './components/nav/sampleRoutes';
import TopNav from './components/nav/TopNav';
import Home from './containers/Home';
import './App.css';

const App = () => (
  <Router>
    <TopNav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/users" component={Users} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
