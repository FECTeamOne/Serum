import React from 'react';
import styled from 'styled-components';

export default function Home() {
  return(
    <StyledHome />
  );
}

const StyledHome = styled.div`
  width: 100vw;
  height: 100vw;
  background-image: url('/assets/home-bg.jpg');
  background-position: center;
  background-size: cover;
`;
