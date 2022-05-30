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
    //<Icon x="0px" y="0px" viewBox="0 0 20.633 20.633" {...props}>
      <Icon stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" {...props}>
      <path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M184 112l144 144-144 144" />
    </Icon>
  );
}

export default ArrowIcon;
