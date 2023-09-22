import styled from '@emotion/styled';

const staticStyles = `
  display: flex;
  gap: 16px;
`;

const absoluteStyles = `
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  gap: 16px;
`;

export const LinksList = styled.ul`
  ${({ position }) => (position === 'static' ? staticStyles : absoluteStyles)}
`;

export const LinkItem = styled.li`
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 50%;
  z-index: 5;
  background-color: ${({ bgColor }) => bgColor};
  transition: border-color var(--transition-duration) var(--timing-function),
    background-color var(--transition-duration) var(--timing-function);
  svg {
    fill: ${({ fill }) => fill};
    transition: transform var(--transition-duration) var(--timing-function);
  }

  &:hover,
  &:focus {
    background-color: ${props => props.hoverFocusParams?.bgColor};
    border-color: ${props => props.hoverFocusParams?.borderColor};

    svg {
      transform: scale(1.05);
    }
  }
`;
