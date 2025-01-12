import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      userId: null, // 초기값
      setUserId: (id) => set({ userId: id }), // userId 설정
      clearUserId: () => set({ userId: null }), // userId 초기화
    }),
    {
      name: 'auth-store', // localStorage에 저장될 키
      getStorage: () => localStorage, // localStorage 사용
    },
  ),
);

export default useAuthStore;
