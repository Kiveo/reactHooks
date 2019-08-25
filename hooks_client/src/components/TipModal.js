import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TipWrapper = styled.span`
  position: absolute;
  background: whitesmoke;
  color: ${props => props.theme.primary};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-weight: bold;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 200px;
  font-family: 'Open Sans';
  font-size: 1em;
`;

const TipHeader = styled.span`
  display: block;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: ${props => props.theme.secondary};
  background: ${props => props.theme.primary};
  border-bottom: 1px solid white;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const TipModal = ({ info, children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <span
        style={{ textDecoration: 'underline' }}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        { children }
      </span>
      { isActive
      && (
      <TipWrapper>
        <TipHeader>U.I.</TipHeader>
        {info}
      </TipWrapper>
      )
    }
    </>
  );
};

export default TipModal;

TipModal.propTypes = {
  info: PropTypes.string.isRequired,
};
