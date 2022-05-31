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
  width: ${({ iconWidth, iconHeight }) => (iconHeight ? (iconWidth || 'auto') : (iconWidth || '1em'))};
  height: ${({ iconWidth, iconHeight }) => (iconWidth ? (iconHeight || 'auto') : (iconHeight || '1em'))};
  transform: ${({ rotation }) => (rotation ? `rotate(${rotation * 90}deg)` : '')};
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
