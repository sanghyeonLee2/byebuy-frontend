import React from 'react';
import { useHeaderNavigationStore } from '../commons/store/useHeaderNavigationStore';
import * as St from './HeaderNavigation.style';
import { iconMap } from './icons/iconMap';

export default function HeaderNavigation() {
  // Zustand 스토어에서 헤더 상태 읽어오기
  const left = useHeaderNavigationStore((state) => state.left);
  const title = useHeaderNavigationStore((state) => state.title);
  const right = useHeaderNavigationStore((state) => state.right);

  // 상태 값에 따른 아이콘 경로 선택
  const leftIconSrc = left ? iconMap[left] : null;
  const rightIconSrc = right ? iconMap[right] : null;

  return (
    <St.HeaderContainer>
      {leftIconSrc && <img src={leftIconSrc} alt={`${left} icon`} />}
      <p>{title}</p>
      {rightIconSrc && <img src={rightIconSrc} alt={`${right} icon`} />}
    </St.HeaderContainer>
  );
}
