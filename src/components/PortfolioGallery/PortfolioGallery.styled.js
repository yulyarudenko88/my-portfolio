import styled from '@emotion/styled';

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  align-items: stretch;
  grid-template-areas:
    'card1 card2 card2'
    'card3 card4 card5'
    'card6 card6 card7'
    'card8 card9 card10';
`;
