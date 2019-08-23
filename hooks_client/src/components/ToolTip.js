import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TipModal = styled.div`
  position: absolute;
  border-bottom: 2px solid orangered;
  background: #888;
  color: whitesmoke;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 200px;
  font-family: 'Open Sans';
  font-size: 1em;
`;

const ToolHeader = styled.span`
  display: block;
  color: ${props => props.theme.primary};
  border-bottom: 1px solid white;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const ToolTip = ({ info, children }) => {
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
      <TipModal>
        <ToolHeader>Tool Tip</ToolHeader>
        {info}
      </TipModal>
      )
    }
    </>
  );
};

export default ToolTip;

ToolTip.propTypes = {
  info: PropTypes.string.isRequired,
};
