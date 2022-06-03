import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 *
 */
export default function Header({ variant, children }) {
  if (variant === 'title') {
    return (
      <TitleHeader>
        {children}
      </TitleHeader>
    );
  }

  if (variant === 'section') {
    return (
      <SectionHeader>
        {children}
      </SectionHeader>
    );
  }

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
}

const TitleHeader = styled.h1`
  font-size: var(--text-8);
`;

const SectionHeader = styled.h1`
  text-transform: uppercase;
  font-size: var(--text-4);
`;

const PrimaryHeader = styled.h2`
  font-weight: var(--text-strong);
  font-size: var(--text-3);
`;
const SecondaryHeader = styled.h3`
  font-size: var(--text-2);
  color: var(--color-light-grey);
  text-transform: uppercase;
  letter-spacing: .015rem;
`;
const TertiaryHeader = styled.h4`
  font-size: var(--text-2);
`;

Header.propTypes = {
  /** Button variant, e.g. 'primary' for a primary action. */
  variant: PropTypes.string,
  children: PropTypes.element,
};
