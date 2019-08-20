import styled from 'styled-components';

const Title = styled.h1`
  /* font-size: 4vh; */
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.primary};
  letter-spacing: 0.2rem;
  word-spacing: 0.5rem;
  text-transform: uppercase;
  padding: 1rem;
  margin-top: 0;
  text-align: center;
`;

export default Title;
