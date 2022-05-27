import React from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border: 1px solid;
  padding-top: var(--space-2);
  padding-bottom: var(--space-2);
  padding-left: var(--space-4);
  padding-right: var(--space-4);
  margin: 0;
  background-color: transparent;
  cursor: pointer;
`;

export default Button;
