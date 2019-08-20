import styled, { keyframes } from 'styled-components';

/* Morphing mask/clipping for visual effect */
const sample = keyframes`
  0% { clip-path: inset(25% 0% 0% 100%);  } 
  10% { clip-path: inset(0% 0% 25% 75%); };
  20% { clip-path: inset(0% 0% 50% 50%); };
  30% { clip-path: inset(0% 25% 75% 25%); };
  40% { clip-path: inset(0% 50% 75% 0%);  } 
  50% { clip-path: inset(0% 75% 50% 0%);  } 
  60% { clip-path: inset(25% 95% 25% 0%);  } 
  70% { clip-path: inset(50% 100% 0% 0%);  } 
  80% { clip-path: inset(75% 10% 0% 0%);  } 
  90% { clip-path: inset(50% 0% 0% 25%);  } 
  100% { clip-path: inset(25% 0% 0% 50%);  } 
}
`;

const PsuedoBox = styled.div`
  display: flex;
  width: 40vw;
  flex-direction: column;
  position: relative;
  text-align: center;
  margin: auto;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background: rgba(100, 100, 100, 0.1);
  /* background: rgba(250, 100, 100, 0.1); */
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
    animation-delay: 3s;
  }
  &:hover:after, &:hover:before {
    color: orangered;
    /* animation: ${sample} 4s linear infinite; */
    box-shadow: inset 0 0 0 1px;
  }
  &:hover {
    background: rgba(250,250,250,0.4);
  }
`;

export default PsuedoBox;
