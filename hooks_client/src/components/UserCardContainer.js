import React, { useState } from 'react';
import PropTypes from 'prop-types';

import UserCard from './UserCard';


const UserCardContainer = ({ users }) => {
  // initialize state with useState Hook
  const [usersList, setUsersList] = useState([users]);

  const fetchUsers = () => {
    fetch('https://swapi.co/api/people/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((formattedResponse) => {
        console.log('formatted resp: ', formattedResponse);
        setUsersList(formattedResponse);
      });
  };

  const handleClick = () => {
    console.log('Fetching...');
    return fetchUsers();
  };

  return (
    <div className="userCardContainer">
      <button type="button" onClick={handleClick}>Swap users to API</button>
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
};

export default UserCardContainer;

UserCardContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
