import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <StyledNavbar>
      <NavbarContent>
        <Logo>Serum</Logo>
        <Links>
          <div>Shop</div>
          <div>Cart</div>
        </Links>
      </NavbarContent>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  padding-top: var(--space-3);
  padding-bottom: var(--space-4);
  padding-left: var(--space-6);
  padding-right: var(--space-6);
  text-transform: uppercase;
  border-bottom: var(--size-00) solid var(--color-main);
  background-color: var(--color-bg);
`;

const NavbarContent = styled.div`
  margin: auto;
  max-width: calc(var(--size-11) + var(--size-15));
  display: flex;
  align-items: baseline;
  justify-content: space-between;

`;

const Logo = styled.span`
  font-weight: var(--text-strong);
  letter-spacing: .1rem;
  font-size: var(--text-8);
`;

const Links = styled.span`
  display: flex;
  gap: var(--space-8);
`;


export default Navbar;
