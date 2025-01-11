import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 95%;

  padding-bottom: 20px;

  overflow: hidden;
  background: linear-gradient(180deg, #1e2f7c 0%, #111d57 47%, #3e2372 100%);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  gap: 52px;
`;

export const Background = styled.img`
  width: 100%;
`;

export const MatchingRowWrapper = styled.div`
  width: 100%;
  /* height: 100%; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 28px;
`;

export const MatchingColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const MatchingImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 96px;
  height: 96px;

  gap: 28px;

  padding: 3px;

  border-radius: 6px;

  background-color: #ffffff;
`;

export const MatchingImage = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 6px;

  object-fit: fill;
`;

export const MatchingText = styled.p`
  font-size: 16px;
  color: #ffffff;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 6px;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #ffffff;

  animation: revealText 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  animation-delay: 1.2s;
  clip-path: inset(100% 0 0 0);

  @keyframes revealText {
    0% {
      clip-path: inset(100% 0 0 0);
    }
    100% {
      clip-path: inset(0 0 0 0);
    }
  }
`;

export const Duration = styled.p`
  font-size: 18px;
  color: #969696;

  animation: revealText 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  animation-delay: 0.6s;
  clip-path: inset(100% 0 0 0);

  @keyframes revealText {
    0% {
      clip-path: inset(100% 0 0 0);
    }
    100% {
      clip-path: inset(0 0 0 0);
    }
  }
`;

export const SubmitButton = styled.button`
  border-radius: 12px;

  padding: 16px 127px;
  margin-top: auto;

  background-color: #8768ff;

  color: #fff;
`;
