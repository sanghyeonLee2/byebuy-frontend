import { Get, Post } from '../configs/http';

// export const getChatRooms = async (userId) => await Get(`/chat/rooms?userId=${userId}`);
export const getChatRooms = async (userId) => await Get(`/chat/rooms?userId=${1}`);

export const getChatHistory = async (interestId) => await Get(`/chat/messages?interestId=${1}`);
// export const getChatHistory = async (interestId) => await Get(`/chat/messages?interestId=${interestId}`);
