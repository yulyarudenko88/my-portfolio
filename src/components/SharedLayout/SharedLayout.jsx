import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';
import { Wrapper, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default SharedLayout;
