import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dropzone from './containers/Dropzone';
import TopNav from './components/nav/TopNav';
import NoMatch from './components/nav/NoMatch';
import UsersNav from './containers/UsersNav';
import Home from './containers/Home';
import './App.css';

const App = () => (
  <Router>
    <TopNav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/upload" component={Dropzone} />
      <Route path="/users" component={UsersNav} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
