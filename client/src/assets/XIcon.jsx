import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'assets/Icon.jsx';

export default function XIcon({ color, ...props }) {
  return (
    <Icon viewBox="0 0 50 50" {...props}>
      <Outline d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
      <Fill d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
    </Icon>
  );
}

const Fill = styled.path`
  stroke-width: 2;
  fill: var(--color-main);
  stroke: var(--color-main);;
`;

const Outline = styled.path`
  stroke-width: 3;
  fill: var(--color-bg);
  stroke: var(--color-bg);
`;

XIcon.propTypes = {
  fillColor: PropTypes.string,
  /**
   * Whether the arrow should have an outline. Useful for
   * increased visibility when overlayed on an image.
   */
  outline: PropTypes.bool,
};

XIcon.defaultProps = {
  fillColor: 'currentColor',
  outline: false,
};
