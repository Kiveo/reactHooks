import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../components/UserCard';

const UserCardContainer = ({ users }) => {
  // initialize state with useState HOOK

  const content = (
    <div className="userCardContainer">
      { users.map(({
        name, info, isBig, id, height, mass,
      }) => (
        <UserCard
          key={id || name}
          name={name}
          info={info || `${name} is ${height}cm tall and has a mass of ${mass}`}
          isBig={isBig}
        />
      ))
      }
    </div>
  );

  return content;
};

export default UserCardContainer;

UserCardContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object.isRequired),
};
