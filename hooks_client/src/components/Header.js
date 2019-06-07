import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ size, children }) => {
  const Tag = size;
  const content = (
    <header>
      <Tag>
        {children}
      </Tag>
    </header>
  );
  return content;
};

export default Header;

Header.defaultProps = {
  size: 'h1',
};

Header.propTypes = {
  size: PropTypes.string,
};
