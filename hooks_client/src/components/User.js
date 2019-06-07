import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

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
    (user.name) ? (
      <Fragment>
        <Header>{`User Link: ${match.params.id}`}</Header>
        {user && <Header size="h2">{`User Name: ${user.name}`}</Header>}
      </Fragment>
    ) : (
      <Header>No Such User</Header>
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
