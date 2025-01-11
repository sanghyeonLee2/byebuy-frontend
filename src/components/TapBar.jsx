import { useLocation, useNavigate } from 'react-router-dom';

import { iconMap } from './icons/iconMap';
import * as S from './TapBar.style';

const TabBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const token = localStorage.getItem('token');

  const tabs = [
    { icon: iconMap.chat, path: '/chatlist', label: '채팅' },
    { icon: iconMap.home, path: token ? '/exploration' : '/', label: '홈' },
    { icon: iconMap.accountCircle, path: '/mypage', label: '마이페이지' },
  ];

  return (
    <S.TabBarWrapper>
      {tabs.map((tab) => (
        <S.TabItem key={tab.path} onClick={() => navigate(tab.path)} $isActive={pathname === tab.path}>
          <S.TabIcon src={tab.icon} $isActive={pathname === tab.path} />
          <S.TabLabel $isActive={pathname === tab.path}>{tab.label}</S.TabLabel>
        </S.TabItem>
      ))}
    </S.TabBarWrapper>
  );
};

export default TabBar;
