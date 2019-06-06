import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import User from '../components/User';

const UsersNav = (props) => {
  const { match } = props;
  // initialize state with useState Hook
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch with useEffect Hook
  useEffect(() => {
    let registered = false;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          setLoading(false);
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((fetchedUsers) => {
        if (!registered) {
          setUsers(fetchedUsers);
        }
        setLoading(false);
      });
    return () => { registered = true; };
  }, []);

  const userLinks = (
    users.map(user => (
      <li key={user.id}>
        {/* setting up a Link to pass more than url string */}
        <Link to={{
          pathname: `${match.url}/${user.id}`,
          state: {
            user,
          },
        }}
        >
          {user.name}
        </Link>
      </li>
    ))
  );

  const content = loading
    ? (<div>Loading...</div>)
    : (
      <nav>
        <h2>Users</h2>
        <ol>
          {userLinks}
        </ol>

        <Route path={`${match.path}/:id`} component={User} />
        <Route
          exact
          path={`${match.path}`}
          render={() => <h3>Please select a user.</h3>}
        />
      </nav>
    );
  return content;
};

export default UsersNav;
