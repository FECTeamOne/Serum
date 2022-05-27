import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  width: ${({ iconWidth }) => iconWidth || '1em'};
  height: ${({ iconHeight }) => iconHeight || '1em'};
  transform: ${({ rotation }) => (rotation ? `rotate(${rotation * 90}deg)` : '')};

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

export default Icon;
