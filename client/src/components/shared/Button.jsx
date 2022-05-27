import React from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  border: 0;
  background-color: transparent;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export default Button;
