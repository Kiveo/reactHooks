import React from 'react';
import Title from './Title';
import ThemeWrapper from './ThemeWrapper';
import PsuedoBox from './PsuedoBox';
import TextBlock from './TextBlock';
import ToolTip from './ToolTip';

const Home = () => (
  <ThemeWrapper>
    <Title uppercase>Welcome, Seeker</Title>
    <PsuedoBox>
      <Title>The Codex</Title>
      <TextBlock>
        {'Data gathered from '}
        <ToolTip info="User Interface">UI</ToolTip>
        {' specimens are stored here. '}
        {'Inspect the samples at your leisure.'}
      </TextBlock>
      <TextBlock alternate>
        {'-Chronicler 2077'}
      </TextBlock>
    </PsuedoBox>
  </ThemeWrapper>
);

export default Home;
