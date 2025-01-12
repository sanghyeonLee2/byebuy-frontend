import { Get, Post } from '../configs/http';
import useAuthStore from '../store/useAuthStore';

export const getChatRooms = async () => {
  const userId = useAuthStore.getState().userId; // userId 전역 상태에서 가져오기
  if (!userId) {
    throw new Error('User ID is not available');
  }
  return await Get(`/chat/rooms?userId=${userId}`);
};

export const getChatHistory = async (interestId) => {
  if (!interestId) {
    throw new Error('Interest ID is required');
  }
  return await Get(`/chat/messages?interestId=${interestId}`);
};
