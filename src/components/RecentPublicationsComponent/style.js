import styled from "styled-components";

export const RecentPublicationsWrpr = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 5rem;
`;

export const PublicationHeading = styled.h1`
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
