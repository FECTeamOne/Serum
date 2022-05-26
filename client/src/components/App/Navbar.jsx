import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: var(--space-6);
  margin-bottom: var(--space-6);
  margin-left: var(--space-6);
  margin-right: var(--space-6);
`;

const Logo = styled.span`
  font-size: var(--text-8);
`;

const Nav = styled.span`
  display: flex;
  gap: var(--space-8);
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Logo>SERUM</Logo>
      <Nav>
        <div>SHOP</div>
        <div>CART</div>
      </Nav>
    </StyledNavbar>
  );
}

export default Navbar;
