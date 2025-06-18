import styled from "styled-components";

export const PageWrpr = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  padding: 5rem 10rem 0rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
