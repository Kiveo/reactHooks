import React, { useState } from 'react';
import UserCardContainer from './UserCardContainer';
import './Home.css';

const Home = () => {
  // State HOOK can be split into multiple states and setState functions
  const [invisisbleInk, setInvisibleInk] = useState('Sleeper Agent');
  const [showUsers, setShowUsers] = useState(false);

  const handleClick = () => {
    setShowUsers(true);
    setInvisibleInk('Activated');
  };

  console.log('Invisible Ink Reads: ', invisisbleInk);
  const renderCards = showUsers && <UserCardContainer />;

  const content = (
    <div id="home">
      <h1>Home</h1>
      <p>Welcome home, User</p>
      <button onClick={handleClick} type="button">Fetch Users</button>
      {renderCards}
    </div>
  );
  return content;
};

export default Home;
