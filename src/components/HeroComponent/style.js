import styled from "styled-components";

export const HeroComponentWrpr = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const HeroTextWrpr = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const HeroTextHeading = styled.h1`
  margin: 0;
  font-size: 4rem;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 600;

  span {
    background-clip: text;
    color: transparent;
    background: linear-gradient(to right, #ffd6e0, #e0d6ff, #c1f0db);
    -webkit-background-clip: text;
  }
`;

export const HeroTextDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textPrimary};
  a {
    color: ${({ theme }) => theme.accent};
    font-weight: 600;
  }
`;

export const MoreButtonsWrpr = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HeroImageWrpr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 50%;
  border-radius: 1rem;

  img {
    width: 100%;
    height: calc(100vh - 5rem);
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    transform: scale(1.03);
    &:hover {
      transform: scale(1.06);
    }
  }
`;
