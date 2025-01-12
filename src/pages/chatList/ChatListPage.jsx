import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getChatRooms } from '../../commons/api/chat.api';
import { useAuthGuard } from '../../commons/hooks/useAuthGuard';
import useHeaderNavigation from '../../commons/hooks/useHeaderNavigation';
import * as St from './ChatListPage.style';

export default function ChatListPage() {
  const [chatRooms, setChatRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useAuthGuard();

  // 헤더 네비게이션 설정
  useHeaderNavigation({
    left: 'backArrow',
    title: '채팅',
    right: 'empty',
  });

  // 채팅방 목록 조회
  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const response = await getChatRooms();
        setChatRooms(response);
      } catch (error) {
        console.error('Failed to fetch chat rooms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChatRooms();
  }, []);

  // 시간 포맷팅 함수
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  // 채팅방 클릭 핸들러
  const handleRoomClick = (interestId) => {
    navigate('/chat', { state: { interestId } });
  };

  // if (loading) {
  //   return <div>Loading...</div>; // TODO: 로딩 스피너 구현
  // }

  return (
    <St.Container>
      <St.RoomList>
        {chatRooms.map((room) => (
          <St.RoomItem key={room.roomId} onClick={() => handleRoomClick(room.roomId)}>
            {/* <St.RoomItem key={room.roomId} onClick={() => handleRoomClick(1)}> */}
            <St.ImageContainer>
              {/* TODO: 상품 이미지가 추가되면 구현 */}
              <img src={room.itemImage} alt="상품 이미지" />
            </St.ImageContainer>

            <St.ContentContainer>
              <St.TopRow>
                <St.Title>{room.partnerName}</St.Title>
                <St.Time>{formatTime(room.lastMessageTime)}</St.Time>
              </St.TopRow>
              <St.BottomRow>
                {/* unreadMessageCount가 있는 경우 hasUnread prop을 전달 */}
                <St.LastMessage $hasUnread={room.unreadMessageCount > 0}>{room.lastMessage}</St.LastMessage>
                {room.unreadMessageCount > 0 && (
                  <St.UnreadMessageCount>
                    {room.unreadMessageCount > 99 ? '99+' : room.unreadMessageCount}
                  </St.UnreadMessageCount>
                )}
              </St.BottomRow>
            </St.ContentContainer>

            {/* 읽지 않은 메시지 수가 API에 추가되면 구현 */}
            {room.unreadCount > 0 && <St.UnreadCount>{room.unreadCount}</St.UnreadCount>}
          </St.RoomItem>
        ))}
      </St.RoomList>
    </St.Container>
  );
}
