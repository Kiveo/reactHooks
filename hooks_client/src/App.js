import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import DropzoneArea from './containers/DropzoneArea';
import TopNav from './components/nav/TopNav';
import NoMatch from './components/nav/NoMatch';
import UsersNav from './containers/UsersNav';
import EditForm from './containers/EditForm';
import Home from './components/Home';
import './App.css';

// May move theme to its own file
export const customTheme = {
  font: 'Montserrat',
  fontSecondary: 'Open Sans',
  primary: '#E85A4F',
  secondary: '#e9e9e9',
  alternate: '#E85A40',
  linkColor: '#333',
  background: '#EAE7DC',
  grayTone: '#333',
};

// The 'App' itself
const App = () => (
  <ThemeProvider theme={customTheme}>
    <Router>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={DropzoneArea} />
        <Route exact path="/edit-form" component={EditForm} />
        <Route path="/users" component={UsersNav} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
