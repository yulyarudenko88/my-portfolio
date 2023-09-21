import styled from '@emotion/styled';

export const Card = styled.li`
  padding: 0px 0px 50% 0px;
  overflow: hidden;
  position: relative;

  &:nth-of-type(1) {
    grid-area: card1;
  }
  &:nth-of-type(2) {
    grid-area: card2;
  }
  &:nth-of-type(3) {
    grid-area: card3;
  }
  &:nth-of-type(4) {
    grid-area: card4;
  }
  &:nth-of-type(5) {
    grid-area: card5;
  }
  &:nth-of-type(6) {
    grid-area: card6;
  }
  &:nth-of-type(7) {
    grid-area: card7;
  }
  &:nth-of-type(8) {
    grid-area: card8;
  }
  &:nth-of-type(9) {
    grid-area: card9;
  }
  &:nth-of-type(10) {
    grid-area: card10;
  }
`;

export const Img = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 110%;
`;

export const Options = styled.ul`
  position: absolute;
  right: 0;
  top: 20px;
  z-index: 5;
  background-color: rgb(245, 245, 245, 0.8);
  padding: 8px;
  display: flex;
  gap: 8px;
`;

export const Option = styled.span`
  color: var(--primary-text-color);
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const LinksList = styled.ul`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  gap: 16px;
`;

export const LinkItem = styled.li`
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 50%;
  z-index: 5;
  background-color: rgb(245, 245, 245, 0.8);
  transition: border-color var(--transition-duration) var(--timing-function);
  svg {
    transition: transform var(--transition-duration) var(--timing-function);
  }

  &:hover,
  &:focus {
    border-color: var(--secondary-text-color);
    svg {
      transform: scale(1.05);
    }
  }
`;
