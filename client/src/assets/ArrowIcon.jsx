import React from 'react';
import styled from 'styled-components';
import Icon from 'assets/Icon.jsx';

const Svg = styled(Icon)`
  path,
  polygon,
  rect {
    fill: var(--color-main);
  }

  circle {
    stroke: var(--color-main);
    stroke-width: 1;
  }

`;

function ArrowIcon(props) {
  return (
    //<path fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="48" d="M184 112l144 144-144 144" />
    //<Icon stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}>
    <Icon strokeWidth="0" viewBox="0 0 512 512" {...props}>
      <path fill="none" stroke="white" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="90" d="M184 112l144 144-144 144" />
      <path fill="none" stroke="black" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="40" d="M184 112l144 144-144 144" />
    </Icon>
  );
}

export default ArrowIcon;
