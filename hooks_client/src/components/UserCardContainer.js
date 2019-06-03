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
        console.log('formatted resp: ', formattedResponse.results);
        setUsersList(formattedResponse.results);
      });
  };

  const handleClick = () => {
    console.log('Fetching...');
    return fetchUsers();
  };

  return (
    <div className="userCardContainer">
      <button className="userCardContainer_button" type="button" onClick={handleClick}>Swap to API</button>
      { users && users.map(({
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
};

export default UserCardContainer;

UserCardContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
