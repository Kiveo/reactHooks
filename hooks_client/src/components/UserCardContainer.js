import React from 'react';
import PropTypes from 'prop-types';

import UserCard from './UserCard';

const UserCardContainer = ({ users }) => (
  <div className="userCardContainer">
    { users && users.map(({
      name, info, isBig, id,
    }) => (
      <UserCard
        key={id}
        name={name}
        info={info}
        isBig={isBig}
      />
    ))
    }
  </div>
);

export default UserCardContainer;

UserCardContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
