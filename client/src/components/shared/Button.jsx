import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

/**
 * Generic button component meant as a replacement for
 * the button tag.
 */
const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          border: 1px solid;
          padding-top: var(--space-2);
          padding-bottom: var(--space-2);
          padding-left: var(--space-4);
          padding-right: var(--space-4);
        `;
      default:
        return css`
          border: 0;
          padding: 0;
        `;
    }
  }}
`;

Button.PropTypes = {
  /** Button variant, e.g. 'primary' for a primary action. */
  variant: PropTypes.string,
};

export default Button;
