import React from 'react';
import { useHeaderNavigationStore } from '../commons/store/useHeaderNavigationStore';
import * as St from './HeaderNavigation.style';
import { iconMap } from './icons/iconMap';
import { useNavigate } from 'react-router-dom';

export default function HeaderNavigation() {
  const navigate = useNavigate();

  // Zustand 스토어에서 헤더 상태 읽어오기
  const left = useHeaderNavigationStore((state) => state.left);
  const title = useHeaderNavigationStore((state) => state.title);
  const right = useHeaderNavigationStore((state) => state.right);

  // 상태 값에 따른 아이콘 경로 선택
  const leftIconSrc = left ? iconMap[left] : null;
  const rightIconSrc = right ? iconMap[right] : null;

  // 뒤로가기 핸들러
  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <St.HeaderContainer>
      {leftIconSrc && (
        <img
          src={leftIconSrc}
          alt={`${left} icon`}
          onClick={left === 'backArrow' ? handleBackClick : undefined}
          style={{ cursor: left === 'backArrow' ? 'pointer' : 'default' }}
        />
      )}
      <St.Title>{title}</St.Title>
      {rightIconSrc && <img src={rightIconSrc} alt={`${right} icon`} />}
    </St.HeaderContainer>
  );
}
