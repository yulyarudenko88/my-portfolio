import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;

  &:not(:last-child)::after {
    content: '|';
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  padding-top: 32px;
  padding-bottom: 32px;

  font-family: var(--secondary-font-family);
  font-size: 16px;
  color: inherit;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: color var(--transition-duration) var(--timing-function);

  &:hover,
  &:focus,
  &.active {
    color: var(--active-text-color);
  }
`;
