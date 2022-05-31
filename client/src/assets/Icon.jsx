import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A component to be used for generating SVG icons.
 * See assets/ArrowIcon.jsx for an example of usage.
 */
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

Icon.propTypes = {
  /** Width css property, e.g. '1px' */
  width: PropTypes.string,
  /** Height css property, e.g. '1px' */
  height: PropTypes.string,
  /** Degrees by which to rotate the icon */
  rotation: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default Icon;
