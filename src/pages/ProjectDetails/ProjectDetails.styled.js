import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-bottom: 16px;
  padding: 10px 20px;
  background-color: transparent;
  transition: background-color var(--transition-duration) var(--timing-function);

  &:hover,
  &:focus {
    background-color: rgba(245, 245, 245, 0.3);
  }
`;

export const Wrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
  /* padding-left: 16px; */
  padding-right: 40%;
  /* height: 100vh; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      to right,
      rgb(47, 48, 58),
      rgba(47, 48, 58, 0.8),
      rgba(47, 48, 58, 0.4)
    ),
    url('https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png');
    color:var(--white-text-color);
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: var(--font-weight-regular);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Info = styled.p`
  font-size: 14px;
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  span:not(:last-child) {
    font-weight: 600;
  }
`;

export const SecondaryTitle = styled.h2`
  font-size: 18px;
  font-weight: var(--font-weight-regular);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 16px 0px;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const SkillsListItem = styled.li`
  padding: 8px;
  background-color: rgba(245, 245, 245, 0.3);
`;
