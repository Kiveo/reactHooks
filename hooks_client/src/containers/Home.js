import React, { useState } from 'react';
// importing Hook: useState
import sampleUserArray from '../assets/SampleUserArray';
import UserCardContainer from '../components/UserCardContainer';
import './Home.css';

const Home = (props) => {
  /*
  * useState always returns an array with two elements: 1. Current State and 2. function() that overrides CS
  * Thus, we can array destructure when calling useState
  * Another diff is that Hook state does not need to be an object and can be set multiple times (diff states)
  * useState might require passing ...state because it overrides state
  */
  // const [state, setState] = useState({
  //   invisisbleInk: { name: 'Super Spy' },
  //   showUsers: false,
  // });

  // Alternative:
  const [invisisbleInk, setInvisibleInk] = useState('Super Spy');
  const [showUsers, setShowUsers] = useState(false);


  const handleClick = () => {
    // setState  with Hooks will overwrite state, so be careful. I pass state to accommodate
    setShowUsers(!showUsers);
  };

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
