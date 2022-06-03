import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

/**
 *
 */
export default function Text({ variant, children }) {
  return (
    <StyledText variant={variant}>
      {children}
    </StyledText>
  );
}

const StyledText = styled.span`
  display: inline;
  ${({ variant }) => {
    if (variant === 'primary') {
      return css`
        font-size: var(--text-3);
      `;
    }
    if (variant === 'secondary') {
      return css`
        font-size: var(--text-2);
      `;
    }
    if (variant === 'tertiary') {
      return css`
        font-size: var(--text-2);
      `;
    }
  }}
`;

Text.propTypes = {
  /** Button variant, e.g. 'primary' for a primary action. */
  variant: PropTypes.string,
};
