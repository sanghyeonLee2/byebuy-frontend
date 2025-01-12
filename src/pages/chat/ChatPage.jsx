import React, { useState, useEffect, useRef } from 'react';
import imageCompression from 'browser-image-compression';

import * as St from './ChatPage.style';
import useHeaderNavigation from '../../commons/hooks/useHeaderNavigation';
import SendIcon from '../../components/icons/send.svg';
import AttachIcon from '../../components/icons/attach-file.svg';
import { getChatHistory } from '../../commons/api/chat.api';
import useAuthStore from '../../commons/store/useAuthStore';

const compressImage = async (imageFile) => {
  const options = {
    maxSizeMB: 0.2, // 더 작은 크기
    maxWidthOrHeight: 600, // 더 낮은 해상도
    useWebWorker: true,
    initialQuality: 0.5, // 품질을 더 낮춤
    fileType: 'image/jpeg',
  };
  try {
    const compressedFile = await imageCompression(imageFile, options);
    return compressedFile;
  } catch (error) {
    console.error('이미지 압축 실패:', error);
    return imageFile;
  }
};

export default function Chat() {
  useHeaderNavigation({
    left: 'backArrow',
    title: 'lubi',
    right: 'empty',
  });

  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  const currentUserId = useAuthStore.getState().userId;
  const [inputText, setInputText] = useState('');
  const fileInputRef = useRef(null); // fileInputRef 선언 및 초기화

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await getChatHistory();
        setMessages(response);
      } catch (error) {
        console.error('Failed to fetch chat history', error);
      }
    };

    fetchChatHistory();
    const newSocket = new WebSocket(`ws://13.125.219.1:8080/chat?userId=${currentUserId}`);

    setSocket(newSocket);

    newSocket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prev) => [...prev, data]);
      } catch (error) {
        console.error('Invalid message format', error);
      }
    };

    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (!socket) return;
    if (inputText.trim() === '') return;

    const messageData = {
      senderId: currentUserId,
      interestId: 1,
      type: 'TEXT',
      content: inputText,
      latitude: null,
      longitude: null,
      createdAt: Math.floor(Date.now() / 1000),
    };

    socket.send(JSON.stringify(messageData));
    setInputText('');
  };

  const handlePhotoUpload = async (e) => {
    if (!socket) return;

    const file = e.target.files[0];
    if (!file) return;

    // 이미지 압축
    const compressedFile = await compressImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result;
      // Base64 데이터에서 헤더 제거
      const base64WithoutHeader = base64Data.includes('base64,') ? base64Data.split('base64,')[1] : base64Data;

      const imageData = {
        senderId: currentUserId,
        interestId: 1,
        type: 'IMAGE',
        content: base64WithoutHeader, // 헤더 제거된 Base64 데이터
        latitude: null,
        longitude: null,
        createdAt: Math.floor(Date.now() / 1000),
      };
      socket.send(JSON.stringify(imageData));
    };
    reader.readAsDataURL(compressedFile);
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <St.Container>
      {/* 메시지 출력 영역 */}
      <St.ChatBox>
        {messages.map((msg, index) => {
          const isMyMessage = msg.senderId === currentUserId;
          const messageDate = new Date(msg.createdAt * 1000);

          const formattedTime = messageDate.toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          });

          let showDateDivider = false;
          if (index === 0) {
            showDateDivider = true;
          } else {
            const prevMessageDate = new Date(messages[index - 1].createdAt * 1000);
            if (prevMessageDate.toDateString() !== messageDate.toDateString()) {
              showDateDivider = true;
            }
          }

          const formattedDate = `${messageDate.getFullYear()}년 ${
            messageDate.getMonth() + 1
          }월 ${messageDate.getDate()}일`;

          return (
            <React.Fragment key={index}>
              {showDateDivider && <St.DateDivider>{formattedDate}</St.DateDivider>}
              <St.MessageWrapper $isMyMessage={isMyMessage}>
                <St.MessageTime $isMyMessage={isMyMessage}>{formattedTime}</St.MessageTime>
                {msg.type === 'TEXT' && <St.TextMessage $isMyMessage={isMyMessage}>{msg.content}</St.TextMessage>}
                {msg.type === 'IMAGE' && (
                  <St.ImageMessage $isMyMessage={isMyMessage}>
                    <img src={`data:image/jpeg;base64,${msg.content}`} alt="업로드된 이미지" />
                  </St.ImageMessage>
                )}
              </St.MessageWrapper>
            </React.Fragment>
          );
        })}
      </St.ChatBox>

      <St.InputArea>
        <St.AttachButton onClick={triggerFileSelect}>
          <img src={AttachIcon} alt="파일 첨부" />
        </St.AttachButton>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handlePhotoUpload}
        />
        <St.TextInput
          type="text"
          value={inputText}
          placeholder="메시지를 입력해주세요."
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (inputText.trim()) {
                sendMessage();
              }
            }
          }}
        />
        <St.SendButton onClick={sendMessage}>
          <img src={SendIcon} alt="전송 버튼" />
        </St.SendButton>
      </St.InputArea>
    </St.Container>
  );
}
