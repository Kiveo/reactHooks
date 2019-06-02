import React from 'react';
import { Route, Link } from 'react-router-dom';

export function About() {
  return <h2>About</h2>;
}
// Example of nested routing for users
export function User({ match }) {
  return <h3>{`Requested Param: ${match.params.id}`}</h3>;
}

export function Users({ match }) {
  return (
    <nav>
      <h2>Users</h2>
      <ol>
        <li>
          <Link to={`${match.url}/user1`}>User 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/user2`}>User 2</Link>
        </li>
      </ol>

      <Route path={`${match.path}/:id`} component={User} />
      <Route
        exact
        path={`${match.path}`}
        render={() => <h3>Please select a user.</h3>}
      />
    </nav>
  );
}

// Example for not found alternative
export function NoMatch({ location }) {
  return (
    <div>
      <h3>
        {'No match for '}
        <code>
          {location.pathname}
        </code>
      </h3>
    </div>
  );
}
