import { create } from 'zustand';

/**
 * 헤더에 표시될 상태(좌/중/우)와 이를 변경하는 액션을 전역으로 관리.
 */
export const useHeaderNavigationStore = create((set) => ({
  // 상태
  left: null,
  title: '',
  right: null,

  // 액션: 헤더 세팅 (객체로 받도록 수정)
  setHeader: ({ left, title, right }) =>
    set(() => ({
      left,
      title,
      right,
    })),

  // 액션: 헤더 초기화
  resetHeader: () =>
    set(() => ({
      left: null,
      title: '',
      right: null,
    })),
}));
