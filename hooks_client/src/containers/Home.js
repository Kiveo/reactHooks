import React, { useState, useEffect } from 'react';
import UserCardContainer from './UserCardContainer';
import './Home.css';

const Home = () => {
  // State HOOK can be split into multiple states and setState functions
  const [isLoading, setIsLoading] = useState('Sleeper Agent');
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    console.log('Home render');
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
        setUsers(chosenOnes);
        setIsLoading(false);
      });
  }, []);

  const handleClick = () => {
    setShowUsers(true);
  };

  const renderCards = showUsers && <UserCardContainer users={users} />;
  const content = (
    <div id="home">
      <h1>Home</h1>
      <p>Welcome home, User</p>
      <button onClick={handleClick} type="button">Show Users</button>
      {isLoading
        ? <p>Loading...</p>
        : renderCards
        }
    </div>
  );
  return content;
};

export default Home;
