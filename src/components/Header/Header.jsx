import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';
import { Wrapper, Logo } from './Header.styled';

const Header = () => {
  return (
    <header>
      <Container>
        <Wrapper>
          <Logo to="/">Yuliia Rudenko</Logo>
          <Navigation />
        </Wrapper>
      </Container>
    </header>
  );
};

export default Header;
