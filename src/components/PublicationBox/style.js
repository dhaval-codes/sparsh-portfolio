import styled from "styled-components";

export const PublicationBoxWrpr = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  animation: rotatingShadow 4s linear infinite;
  border-radius: 1rem;

  @keyframes rotatingShadow {
    0% {
      box-shadow: 0 -3px 8px rgba(255, 182, 193, 0.3),
        3px 0 8px rgba(152, 216, 216, 0.3), 0 3px 8px rgba(240, 182, 236, 0.3),
        -3px 0 8px rgba(224, 176, 255, 0.3);
    }
    25% {
      box-shadow: 3px 0 8px rgba(255, 182, 193, 0.3),
        0 3px 8px rgba(152, 216, 216, 0.3), -3px 0 8px rgba(240, 182, 236, 0.3),
        0 -3px 8px rgba(224, 176, 255, 0.3);
    }
    50% {
      box-shadow: 0 3px 8px rgba(255, 182, 193, 0.3),
        -3px 0 8px rgba(152, 216, 216, 0.3), 0 -3px 8px rgba(240, 182, 236, 0.3),
        3px 0 8px rgba(224, 176, 255, 0.3);
    }
    75% {
      box-shadow: -3px 0 8px rgba(255, 182, 193, 0.3),
        0 -3px 8px rgba(152, 216, 216, 0.3), 3px 0 8px rgba(240, 182, 236, 0.3),
        0 3px 8px rgba(224, 176, 255, 0.3);
    }
    100% {
      box-shadow: 0 -3px 8px rgba(255, 182, 193, 0.3),
        3px 0 8px rgba(152, 216, 216, 0.3), 0 3px 8px rgba(240, 182, 236, 0.3),
        -3px 0 8px rgba(224, 176, 255, 0.3);
    }
  }
`;

export const PublicationsTextWrpr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  gap: 0.5rem;
`;

export const PublicationHeading = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.textPrimary};
`;

export const PublicationContributors = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};
`;

export const PublicationText = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.25rem;
  font-weight: 400;
`;

export const TagButtonWrpr = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const PublicationLogo = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
  width: 30%;
  text-align: center;
  margin: 0;
  height: fit-content;
  cursor: default;

  .award {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    opacity: 0.9;
  }

  span {
    display: inline-block;
    opacity: 0;
    transform: translateY(1rem);
    animation: strokeFadeIn 0.6s ease forwards;
  }

  // Stagger initial delay
  span:nth-child(1) {
    animation-delay: 0s;
  }
  span:nth-child(2) {
    animation-delay: 0.05s;
  }
  span:nth-child(3) {
    animation-delay: 0.1s;
  }
  span:nth-child(4) {
    animation-delay: 0.15s;
  }
  span:nth-child(5) {
    animation-delay: 0.2s;
  }
  span:nth-child(6) {
    animation-delay: 0.25s;
  }
  span:nth-child(7) {
    animation-delay: 0.3s;
  }
  span:nth-child(8) {
    animation-delay: 0.35s;
  }
  span:nth-child(9) {
    animation-delay: 0.4s;
  }
  span:nth-child(10) {
    animation-delay: 0.45s;
  }

  @keyframes strokeFadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover span {
    animation: strokePulse 1s ease-in-out infinite;
  }

  @keyframes strokePulse {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(-0.2rem);
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
