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
`;
