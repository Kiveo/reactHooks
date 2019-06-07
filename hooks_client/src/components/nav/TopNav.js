import React from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <header>
      <nav id="top-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
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
