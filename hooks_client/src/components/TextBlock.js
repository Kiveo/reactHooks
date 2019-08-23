import styled from 'styled-components';

const TextBlock = styled.p`
  color: ${props => (props.alternate ? props.theme.alternate : props.theme.grayTone)};
  font-size: 1.25rem;
  font-family: ${props => props.theme.fontSecondary};
  /* max-width: 500px; */
  padding: 1rem;
  line-height: 2em;
`;

export default TextBlock;
