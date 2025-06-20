import styled from "styled-components";

export const NewsCardWrpr = styled.div`
  height: auto;
  width: 100%;
  border-radius: 1rem;
  display: flex;
`;

export const Line = styled.div`
  height: auto;
  width: 2px;
  background-color: ${({ theme }) => theme.accent};
`;

export const NewsHeading = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => `${theme.textSecondary}`};
  font-weight: 600;
  padding: 1rem;
  margin: 0;
  width: 12rem;
  @media (min-width: 1080px) and (max-width: 1440px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1079px) {
    font-size: 1rem;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 1rem;
    width: 9rem;
  }
`;

export const NewsDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 400;
`;

export const NewsDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textPrimary};
  padding: 1rem;
  width: calc(100% - 15rem);
  @media (min-width: 1080px) and (max-width: 1440px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1079px) {
    font-size: 1rem;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 1rem;
    width: calc(100% - 9rem);
  }
`;
