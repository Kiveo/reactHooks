import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';

const UserCardContainer = () => {
  // initialize state with useState HOOK
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect HOOK for api call: empty array => componentDidMount()
  useEffect(() => {
    setIsLoading(true);

    fetch('https://swapi.co/api/people/')
      .then((response) => {
        if (!response.ok) {
          setIsLoading(false);
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((people) => {
        const chosenOnes = people.results.slice(0, 5);
        setUserList(chosenOnes);
        setIsLoading(false);
      });
  }, []);

  const content = !isLoading ? (
    <div className="userCardContainer">
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
    </div>
  );

  return content;
};

export default UserCardContainer;
