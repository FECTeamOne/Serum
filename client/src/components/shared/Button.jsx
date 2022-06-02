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
  height: ${({ height }) => height || null};
  width: ${({ width }) => width || null};
  margin: 0;
  cursor: ${({ cursor }) => cursor || 'pointer'};
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          color: var(--color-bg);
          background-color: var(--color-main);
          border: 1px solid var(--color-main);
          padding-top: var(--space-2);
          padding-bottom: var(--space-2);
          padding-left: var(--space-4);
          padding-right: var(--space-4);
        `;
      default:
        return css`
          background-color: transparent;
          border: 0;
          padding: 0;
        `;
    }
  }}
`;

Button.propTypes = {
  /** Button variant, e.g. 'primary' for a primary action. */
  variant: PropTypes.string,
};

export default Button;
