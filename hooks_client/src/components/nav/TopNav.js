import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components to be used in component render/return
const StyledUl = styled.ul`
  padding: 0;
  list-style-type: none;
  /* // TODO implement responsive styling media queries */
  min-width: 40vw;
  border-top: 2px solid ${props => props.theme.primary};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  background: ${props => props.theme.background};
  @media(max-width: 600px) {
    flex-direction: column;
  }
  `;

const StyledLi = styled.li`
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 1rem;
  font-family: ${props => props.theme.fontSecondary};
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  letter-spacing: 0.2em;
  transition: all ease 0.5s;
  /* Setup for the hover changed psuedo-element */
  position: relative;
  z-index: 0;
  &:after {
    content: '';
    width: 100%;
    height: 0px;
    background: ${props => props.theme.primary};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all ease 0.5s;
  };

  &:hover {
    color: ${props => props.theme.secondary};
    &:after {
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
      height: 100%;
    } 
  };
  
  @media(max-width: 600px) {
    &:after {
    content: '';
    width: 5px;
    height: 100%;
    };
    
    &:hover:after {
      width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    };
  }
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
