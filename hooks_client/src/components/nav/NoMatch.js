import React from 'react';
import Header from '../Header';

// 404 Result
export default function NoMatch({ location }) {
  return (
    <div>
      <Header>
        {'No match for '}
        <code>
          {location.pathname}
        </code>
      </Header>
    </div>
  );
}
