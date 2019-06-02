import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';

function TopNav() {
  return (
    <header>
      <nav id="top-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TopNav;