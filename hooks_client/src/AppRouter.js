import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Route exact path="/" component={Index} />
      <Route exact path="/about" component={About} />
      <Route exact path="/users" component={Users} />
    </Router>
  );
}

export default AppRouter;
