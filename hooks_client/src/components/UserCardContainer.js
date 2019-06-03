import React, { useState } from 'react';
import PropTypes from 'prop-types';

import UserCard from './UserCard';


const UserCardContainer = ({ users }) => {
  // initialize state with useState Hook
  const [userList, setUserList] = useState([users]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO couple fetchUsers to HOOK version of componentDidMount()
  const fetchUsers = () => {
    console.log('Fetch Called');
    fetch('https://swapi.co/api/people/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((formattedResponse) => {
        console.log('formatted resp: ', formattedResponse.results);
        setUserList(formattedResponse.results);
      });
  };

  const handleClick = () => {
    console.log('Fetching...');
    return fetchUsers();
  };

  const content = isLoading ? (
    <div className="userCardContainer">
      { !isLoading
        && <span className="userCardContainer_button">NOT LOADED YET</span>
      }
      { userList.map(({
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
  ) : (
    <div>
      <p>Loading...</p>
      <button className="userCardContainer_button" type="button" onClick={handleClick}>Swap to API</button>
    </div>
  );

  return content;
};

export default UserCardContainer;

UserCardContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
