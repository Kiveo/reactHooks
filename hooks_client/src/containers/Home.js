import React, { useState } from 'react';
import sampleUserArray from '../assets/SampleUserArray';
import UserCardContainer from '../components/UserCardContainer';
import './Home.css';

const Home = () => {
  /*
  * useState always returns an array with two elements: 1. Current State and 2. function() that overrides CS
  * Thus, we can array destructure when calling useState
  * Another diff is that Hook state does not need to be an object and can be set multiple times (diff states)
  * useState might require passing ...state because it overrides state
  * Sample
  * const [state, setState] = useState({
  *   invisisbleInk: { name: 'Sleeper Agent' },
  *   showUsers: false,
  * });
  */
  // Alternative:
  const [invisisbleInk, setInvisibleInk] = useState('Sleeper Agent');
  const [showUsers, setShowUsers] = useState(false);


  const handleClick = () => {
    if (showUsers) {
      setInvisibleInk('Deactivated');
    } else {
      setInvisibleInk('Activated');
    }
    setShowUsers(!showUsers);
  };

  console.log('Invisible Ink Reads: ', invisisbleInk);
  return (
    <div id="home">
      <h1>Home</h1>
      <p>Welcome home, User</p>
      <button onClick={handleClick} type="button">Show Users</button>
      { showUsers
      && (
        <UserCardContainer
          users={sampleUserArray}
        />
      )
    }
    </div>
  );
};

export default Home;
