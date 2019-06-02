import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.css';

const UserCard = (props) => {
  const { name, info, isBig } = props;
  return (
    <div className={isBig ? 'userCard userCard--big' : 'userCard'}>
      <h3>{name}</h3>
      <p>{`Info: ${info}`}</p>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string,
  isBig: PropTypes.bool,
};

UserCard.defaultProps = {
  info: 'Defaulted Prop for Info',
  isBig: false,
};
