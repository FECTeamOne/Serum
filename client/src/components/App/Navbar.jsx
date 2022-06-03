import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: var(--space-6);
  margin-bottom: var(--space-8);
  margin-left: var(--space-6);
  margin-right: var(--space-6);
  text-transform: uppercase;
`;

const Logo = styled.span`
  font-weight: var(--text-strong);
  letter-spacing: .1rem;
  font-size: var(--text-8);
`;

const Nav = styled.span`
  display: flex;
  gap: var(--space-8);
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Logo>Serum</Logo>
      <Nav>
        <div>Shop</div>
        <div>Cart</div>
      </Nav>
    </StyledNavbar>
  );
}

export default Navbar;
