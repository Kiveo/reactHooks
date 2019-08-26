import styled from 'styled-components';

const PsuedoBox = styled.div`
  display: flex;
  min-width: 40vw;
  max-width: 500px;
  flex-direction: column;
  position: relative;
  text-align: center;
  margin: 1rem auto;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  /* create layer for visual effect  */
  /* &:after, &:before { */
  &:before, &:after {
    content: '';
    border-radius: 2rem;
    position:  absolute;
    top: 0;
    right: 0px;
    left: 0;
    bottom: 0;
    margin: -10px;
    box-shadow: inset 0 0 0 2px;
    color: ${props => props.theme.primary};
    clip-path: inset(50% 0% 0% 75%);
  } 
  
  &:before {
    clip-path: inset(0% 75% 50% 0%);
  }
  &:hover:after, &:hover:before {
    color: ${props => props.theme.alternate};
  }
`;

export default PsuedoBox;
