import styled from "styled-components";

export const PageWrpr = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  padding: 5rem 10rem 0rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 768px) and (max-width: 1079px) {
    padding: 5rem 2rem 0rem 2rem;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    padding: 5rem 1rem 0rem 1rem;
  }
`;
