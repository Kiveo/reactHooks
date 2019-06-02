import React from 'react';
import sampleUserArray from '../assets/SampleUserArray';
import UserCardContainer from '../components/UserCardContainer';
import './Home.css';

// TODO enable state use without using class
// TODO add react Hook(s)
let showusers = false;
const handleClick = () => {
  showusers = true;
};

const Home = () => (
  <div id="home">
    <h1>Home</h1>
    <p>Welcome home, User</p>
    <button onClick={handleClick} type="button">Show Users</button>
    { showusers
      && (
      <UserCardContainer
        users={sampleUserArray}
      />
      )
    }
  </div>
);

export default Home;
