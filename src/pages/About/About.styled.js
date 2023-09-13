import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Image = styled.img`
  width: 450px;
  border-radius: 50%;
`;

export const ListItem = styled.li`
  padding: 16px 0;
  border-top: 1px solid var(--active-text-color);
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: var(--font-weight-regular);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Info = styled.p`
  font-size: 14px;
  line-height: 2;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const SkillsList = styled.ul`
  display:flex;
  flex-wrap: wrap;
  gap:8px;
`;

