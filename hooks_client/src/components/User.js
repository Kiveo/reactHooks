import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const User = ({ match, location }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setUser(location.state.user);
    setLoading(false);
  }, [location.state.user]);

  const content = loading
    ? (<div>Loading User...</div>)
    : (
      <div>
        <h1>{`User Link: ${match.params.id}`}</h1>
        {user && <h3>{`User Name: ${user.name}`}</h3>}
      </div>
    );
  return content;
};

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
};

export default User;
