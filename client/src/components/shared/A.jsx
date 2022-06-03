import React from 'react';
import styled, { css } from 'styled-components';

/**
 *
 */
const A = styled.a.attrs((props) => ({
  href: props.href,
}))`
  color: var(--color-main);
  text-decoration: none;
`;

export default A;
