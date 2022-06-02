import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

/**
 *
 */
export default function Header({ variant, children }) {
  if (variant === 'primary') {
    return (
      <PrimaryHeader>
        {children}
      </PrimaryHeader>
    );
  }

  if (variant === 'secondary') {
    return (
      <SecondaryHeader>
        {children}
      </SecondaryHeader>
    );
  }

  if (variant === 'tertiary') {
    return (
      <TertiaryHeader>
        {children}
      </TertiaryHeader>
    );
  }

};

const PrimaryHeader = styled.h1`
  font-size: var(--text-3);
`;
const SecondaryHeader = styled.h1`
  font-size: var(--text-2);
`;
const TertiaryHeader = styled.h1`
  font-size: var(--text-2);
`;

Header.propTypes = {
  /** Button variant, e.g. 'primary' for a primary action. */
  variant: PropTypes.string,
};
