import styled from 'styled-components';

export const TabBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;

  transform: translateX(-50%);
  width: 375px;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 60px;
  padding: 20px 0px;

  background-color: #252528;
`;

export const TabItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

// export const TabIcon = styled.img`
//   width: 20px;
//   height: 20px;
//   /* color: ${({ isActive }) => (isActive ? '#fff' : '#737378')}; */
//   opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};

//   object-fit: fill;
// `;

export const TabIcon = styled.img`
  width: 20px;
  height: 20px;
  filter: ${({ isActive }) =>
    isActive
      ? 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)'
      : 'brightness(0) saturate(100%) invert(45%) sepia(9%) saturate(248%) hue-rotate(202deg) brightness(94%) contrast(86%)'};
  object-fit: contain;
`;

export const TabLabel = styled.span`
  font-size: 12px;
  color: ${({ isActive }) => (isActive ? '#fff' : '#737378')};
`;
