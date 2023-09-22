import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Image = styled.img`
  width: 400px;
  max-height: 480px;
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

  span {
    font-weight: 600;
  }
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SkillsListItem = styled.li`
  padding: 8px;
  background-color: var(--background-color-transparent);
`;

export const CertificateList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const CertificateListItem = styled.li`
  padding: 12px;
  background-color: var(--background-color-transparent);
`;

export const CertificateTitle = styled.h3`
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const ImgWrap = styled.div`
  padding: 0px 0px 58% 0px;
  overflow: hidden;
  position: relative;
`;

export const CertificateImg = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
