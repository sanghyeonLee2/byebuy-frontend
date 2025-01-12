import styled, { keyframes } from 'styled-components';

// 애니메이션 정의
const slideIn = keyframes`
  0% {
    transform: translateX(100%); /* 처음에는 화면 밖에 있음 */
  }
  50% {
    transform: translateX(-50%); /* 오른쪽 중간으로 이동 */
  }
  100% {
    transform: translateX(100%); /* 다시 화면 밖으로 이동 */
  }
`;

export const ExplorationHeader = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #262629;
  margin-bottom: 30px;
  span {
    font-size: small;
  }
`;

export const FilterBtn = styled.button`
  width: 110px;
  height: 34px;
  border: 1px solid #58585f;
  border-radius: 26px;
  background-color: #313133;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyProductWrap = styled.div`
  width: 100px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImg = styled.div`
  margin: 0 auto;
  min-height: 536px;
  cursor: ${(props) => props.index === 0 && 'pointer'};
  border-top-right-radius: 0;
  padding-top: 420px;
  margin-bottom: 15px; /* Add margin between items */
  ${(props) =>
    props.isSelected &&
    `
      border: 2px solid #8768FF; /* 강조 테두리 색상 */
      box-shadow: 0px 0px 15px 2px rgba(135, 104, 255, 0.7); /* 강조 그림자 */
  `}
`;
export const ProductInfoWrap = styled.div`
  height: 85px;
  padding: 0 20px;
  span {
    font-size: x-small;
  }

  h3,
  p {
    color: white;
  }
  p {
    font-size: small;
  }
`;

export const ProductTitleWrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 7px;
`;

export const AnimationBox = styled.div`
  span {
    padding-top: 9px;
  }
  div {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  bottom: 78%;
  right: 0; /* #root의 오른쪽 모서리를 기준으로 위치 */
  width: 96px;
  height: 40px;
  background-color: #8768ff;
  border-radius: 8px;
  animation: ${slideIn} 1s ease-in-out forwards;
`;

// Scrollable container for items
export const ItemsContainer = styled.div`
  overflow-y: scroll; /* 스크롤은 유지 */
  max-height: 80vh; /* 원하는 최대 높이 설정 */

  /* 스크롤바 숨기기 (모든 브라우저에 대해 적용) */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge에서 스크롤바 숨기기 */
  }

  /* Firefox에서 스크롤바 숨기기 */
  scrollbar-width: none;

  /* Internet Explorer, Edge에서 스크롤바 숨기기 */
  -ms-overflow-style: none;
`;
