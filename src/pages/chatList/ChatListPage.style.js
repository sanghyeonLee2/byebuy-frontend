import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 430px;
  margin: 0 auto;
  background-color: #252528;
  display: flex;
  flex-direction: column;
`;

export const RoomList = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const RoomItem = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  border-bottom: 1px solid #333333;
  cursor: pointer;

  &:hover {
    background-color: #111111;
  }
`;

export const ImageContainer = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background-color: #333333;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0; // flex item 내부 텍스트 말줄임을 위해 필요
`;

export const TopRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.25rem;
`;

export const Title = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

export const Time = styled.span`
  color: #9c9ca3;
  font-size: 12px;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LastMessage = styled.div`
  font-size: 14px;
  color: #9c9ca3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 0.25rem;

  /* hasUnread prop이 true일 때 스타일 변경 */
  ${({ $hasUnread }) =>
    $hasUnread &&
    css`
      color: #ffffff;
      font-weight: 500;
    `}
`;

export const UnreadMessageCount = styled.span`
  background-color: #8165df;
  color: white;
  font-size: 12px;
  width: 20px;
  height: 20px;
  min-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// export const Navigation = styled.nav`
//   display: flex;
//   justify-content: space-around;
//   padding: 12px 0;
//   background-color: #000000;
//   border-top: 1px solid #333333;
// `;

// export const NavButton = styled.button`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 4px;
//   background: none;
//   border: none;
//   color: ${(props) => (props.active ? '#8165DF' : '#888888')};
//   font-size: 12px;
//   cursor: pointer;
// `;
