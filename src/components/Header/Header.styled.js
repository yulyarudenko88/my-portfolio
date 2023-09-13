import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  font-family: var(--logo-font-family);
  font-size: 26px;
  font-weight: 900;
  color: var(--primary-text-color);
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
