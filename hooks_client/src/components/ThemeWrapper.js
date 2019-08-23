import styled from 'styled-components';

const ThemeWrapper = styled.section`
  background: ${props => props.theme.background};
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export default ThemeWrapper;
