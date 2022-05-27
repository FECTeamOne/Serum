import React from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
`;

export default Button;
