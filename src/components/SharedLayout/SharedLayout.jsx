import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Wrapper, Main } from './SharedLayout.styled';
import { Watch } from 'react-loader-spinner';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Suspense
          fallback={
            <div>
              <Watch
                height="70"
                width="70"
                radius="45"
                color="rgb(209, 209, 209)"
                ariaLabel="loading"
                wrapperStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '75px',
                }}
                visible={true}
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default SharedLayout;
