import styled from "styled-components";

export const LatestNewsWrpr = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

export const NewsHeading = styled.h1`
  margin: 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.textPrimary};
  border-bottom: ${({ theme }) => `2px solid ${theme.accent}`};
`;

export const SeeMoreButtonWrpr = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const NewsCardsWrpr = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
