import React from 'react';
import styled, { css } from 'styled-components';

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

export default Button;
