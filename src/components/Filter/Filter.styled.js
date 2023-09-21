import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;

  &:not(:last-child)::after {
    content: '|';
  }

  button {
    display: inline-flex;
    padding: 0; 
    border: 0 solid transparent;
    background-color:transparent;

    font-family: var(--secondary-font-family);
    font-size: 16px;
    color: inherit;
    letter-spacing: 2px;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    transition: color var(--transition-duration) var(--timing-function);

    &:hover,
    &:focus,
    &.active {
      color: var(--active-text-color);
    }
  }
`;
