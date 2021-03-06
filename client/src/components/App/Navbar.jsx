import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <StyledNavbar>
      <NavbarContent>
        <StyledLink to="/">
          <Logo>Serum</Logo>
        </StyledLink>
        <Links>
          <StyledLink to="/shop">
            <div>Shop</div>
          </StyledLink>
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
  padding-bottom: var(--space-3);
  padding-left: var(--space-6);
  padding-right: var(--space-8);
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-main);

  &:active {
    color: var(--color-main);
  }
`;

const Logo = styled.span`
  font-weight: var(--text-strong);
  letter-spacing: .1rem;
  font-size: var(--text-7);
`;

const Links = styled.span`
  font-size: var(--text-4);
  letter-spacing: .04rem;
  display: flex;
  gap: var(--space-7);
`;
