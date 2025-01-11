import { useLocation, useNavigate } from 'react-router-dom';

import { iconMap } from './icons/iconMap';
import * as S from './TapBar.style';

const TabBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const tabs = [
    { icon: iconMap.chat, path: '/chatlist', label: '채팅' },
    { icon: iconMap.home, path: '/', label: '홈' },
    { icon: iconMap.accountCircle, path: '/profile', label: '프로필' },
  ];

  return (
    <S.TabBarWrapper>
      {tabs.map((tab) => (
        <S.TabItem key={tab.path} onClick={() => navigate(tab.path)} isActive={pathname === tab.path}>
          <S.TabIcon src={tab.icon} isActive={pathname === tab.path} />
          <S.TabLabel isActive={pathname === tab.path}>{tab.label}</S.TabLabel>
        </S.TabItem>
      ))}
    </S.TabBarWrapper>
  );
};

export default TabBar;
