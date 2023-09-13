import { NavList, NavItem, StyledLink } from './Navigation.styled';

const PAGES = ['About', 'Portfolio', 'Contacts'];

const Navigation = () => {
  return (
    <nav>
      <NavList>
        {PAGES.map(page => (
          <NavItem key={page}>
            <StyledLink to={page === 'About' ? '/' : `/${page.toLowerCase()}`}>
              {page}
            </StyledLink>
          </NavItem>
        ))}
      </NavList>
    </nav>
  );
};

export default Navigation;
