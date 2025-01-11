import styled from 'styled-components';

export const Container = styled.div`
  max-width: 430px;
  margin: 0 auto;
  background-color: #252528;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ChatBox = styled.div`
  flex: 1;
  padding: 1.25rem;
  padding-bottom: 80px; /* InputArea 높이만큼의 공간 확보 */
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.$isMyMessage ? 'flex-end' : 'flex-start')};
  margin-bottom: 0.5rem;
  gap: 0.5rem;
  align-items: flex-end;
`;

export const MessageTime = styled.span`
  font-size: 12px;
  color: #888;
  flex-shrink: 0;
  order: ${(props) => (props.$isMyMessage ? '1' : '2')};
`;

export const TextMessage = styled.div`
  background-color: ${(props) => (props.$isMyMessage ? '#8165DF' : '#333333')};
  color: #ffffff;
  padding: 0.5rem 0.75rem;
  border-radius: 13px;
  max-width: 80%;
  word-break: break-word;
  font-size: 14px;
  order: ${(props) => (props.$isMyMessage ? '2' : '1')};
`;

export const DateDivider = styled.div`
  text-align: center;
  color: #888;
  font-size: 12px;
  margin-bottom: 1rem;
`;

export const InputArea = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #39393d;
  border-top: 1px solid #333333;
  gap: 0.5rem;
  z-index: 100;
`;

export const TextInput = styled.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  border: 1px solid #44444a;
  background-color: #757575;
  color: white;

  font-size: 14px;

  &::placeholder {
    color: #acacac;
  }

  &:focus {
    outline: none;
  }
`;

export const AttachButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #58585f;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
`;

export const SendButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #8165df;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
`;

export const ImageMessage = styled.div`
  margin: 5px 0;
  order: ${(props) => (props.$isMyMessage ? '2' : '1')};

  img {
    max-width: 200px;
    height: auto;
    border-radius: 13px;
  }
`;
