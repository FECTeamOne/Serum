import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'assets/Icon.jsx';

export default function XIcon({ color, ...props }) {
  return (
    //<Icon viewBox="0 0 146 304" fillColor={fillColor} {...props}>
    // square
    //<path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
    //arrows
    //<path d="M22 3.41L16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2 22 3.41zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59 3.41 22z"></path>
    //<g transform="matrix(1 0 0 1 5 5)" id="MUkWeoZ6eHHiIqvzmVCYU"  >
    //<Path d="M 5 -5 L 5 5 L -5 5"/>
    //</g>
    //<g transform="matrix(1 0 0 1 5 25)" id="qirgjlc01LkUtbfNjy3M3"  >
    //<Path d="M -5 -5 L 5 -5 L 5 5" stroke-linecap="round" />
    //</g>
    //<g transform="matrix(1 0 0 1 25 25)" id="5ope6L5MSMabS5KEDvwUu"  >
    //<Path d="M -5 5 L -5 -5 L 5 -5" stroke-linecap="round" />
    //</g>
    //<g transform="matrix(1 0 0 1 25 5)" id="KfIX6QgregsQNz4XfLena"  >
    //<Path d="M -5 -5 L -5 5 L 5 5" />
    //</g>
    <Icon strokeWidth="10" viewBox="0 0 50 50" {...props}>
      <Outline d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
      <Fill d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
    </Icon>
  );
}

const Fill = styled.path`
  stroke-width: 1;
  fill: var(--color-main);
  stroke: var(--color-main);;
`;

const Outline = styled.path`
  stroke-width: 2;
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
