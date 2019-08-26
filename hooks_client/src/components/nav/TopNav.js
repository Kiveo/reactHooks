import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components to be used in component render/return
const StyledUl = styled.ul`
  list-style-type: none;
  /* // TODO implement responsive styling */
  /* display: flex; */
  justify-content: space-between;
  margin: 0 auto;
  background: ${props => props.theme.background};
`;

const StyledLi = styled.li`
  display: inline-block;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 1rem;
  color: ${props => props.theme.linkColor};
  /* // ? want to inherit bg? tbd */
  /* background: ${props => props.theme.background}; */
  text-decoration: none;
  font-family: ${props => props.theme.font};
  font-weight: bold;
  letter-spacing: 0.2em;
  transition: all ease 0.5s;
  /* Setup for the hover changed psuedo-element */
  position: relative;
  z-index: 0;
  &:after {
    content: '';
    width: 100%;
    height: 2px;
    background: ${props => props.theme.primary};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    transition: all ease 0.5s;
  };

  &:hover {
    color: ${props => props.theme.secondary};
    
    &:after {
      height: 100%;
    } 
  };
  
`;

// component render/return
function TopNav() {
  return (
    <nav id="top-nav">
      <StyledUl>
        <StyledLi>
          <StyledLink to="/">Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/upload">Upload</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/edit-form">Create&Edit Form</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/users">Users</StyledLink>
        </StyledLi>
      </StyledUl>
    </nav>
  );
}

export default TopNav;
