import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const User = ({ match, location }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (location.state && location.state.user) {
      setUser(location.state.user);
    }
    setLoading(false);
  }, [location.state]);

  const renderContent = (
    (match.params.id === user.id) ? (
      <Fragment>
        <h1>{`User Link: ${match.params.id}`}</h1>
        {user && <h3>{`User Name: ${user.name}`}</h3>}
      </Fragment>
    ) : (
      <h1>No Such User</h1>
    )
  );
  const content = loading
    ? (<div>Loading User...</div>)
    : renderContent;
  return content;
};

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
};

export default User;
