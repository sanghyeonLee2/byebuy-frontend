import React, { useEffect, useState } from 'react';
import * as St from './MyPage.style';
import useHeaderNavigation from '../../commons/hooks/useHeaderNavigation';
import { decodeToken } from '../../commons/utils/decodeToken';
import LogOut from '../../components/icons/logout.svg';
import { getMyItem, getMyPopularItem } from '../../commons/api/item.api';
import { logout } from '../../commons/api/example.api';

const MyPage = () => {
  useHeaderNavigation({
    left: 'backArrow',
    title: '마이페이지',
    right: 'empty',
  });

  const [userData, setUserData] = useState(null);
  const [myItemList, setMyItemList] = useState([]);
  const [myPopularItems, setMyPopularItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedData = decodeToken(token);
      if (decodedData) {
        setUserData(decodedData);
      }
    }

    const fetchMyItemList = async () => {
      try {
        const response = await getMyItem();
        setMyItemList(response.items);

        if (response.items.length > 0) {
          // 초기 상태로 첫 번째 아이템을 선택
          const firstItemId = response.items[0].id;
          fetchPopularItems(firstItemId);
        }
      } catch (error) {
        console.error('Failed to fetch my item list', error);
      }
    };

    fetchMyItemList();
  }, []);

  // 선택된 아이템 ID에 따른 인기 리스트 가져오기
  const fetchPopularItems = async (itemId) => {
    try {
      const response = await getMyPopularItem(itemId);
      setMyPopularItems(response.items || []);
    } catch (error) {
      console.error('Failed to fetch popular items', error);
      setMyPopularItems([]);
    }
  };

  // 카드 클릭 시 선택된 아이템 업데이트 및 인기 리스트 요청
  const handleCardClick = (itemId) => {
    fetchPopularItems(itemId); // 해당 ID의 인기 리스트 가져오기
  };

  const handleLogout = async () => {
    try {
      await logout(); // 로그아웃 API 호출
      navigate('/signin'); // 로그인 페이지로 이동
    } catch (error) {
      console.error('Failed to logout', error);
      alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <St.Container>
      {/* 사용자 정보 */}
      {userData && (
        <St.ProfileCard>
          <St.ProfileInfo>
            <St.Name>{userData.name}</St.Name>
            <St.Username>{userData.sub}</St.Username>
          </St.ProfileInfo>
          <St.IconButton onClick={() => handleLogout()}>
            <img src={LogOut} alt="로그아웃 버튼" />
          </St.IconButton>
        </St.ProfileCard>
      )}

      {/* 내 물건 리스트 */}
      <St.Section>
        <St.SectionHeader>
          <St.SectionHeaderText>
            <St.SectionTitle>내 물건</St.SectionTitle>
            <St.SectionDescription>내가 올린 물건을 한 눈에 볼 수 있어요.</St.SectionDescription>
          </St.SectionHeaderText>
          <St.ViewMoreLink href="/myitem">더보기</St.ViewMoreLink>
        </St.SectionHeader>
        {myItemList.length > 0 ? (
          <St.GridContainer>
            {myItemList.map((item) => (
              <St.PropertyCard key={item.id} onClick={() => handleCardClick(item.id)}>
                <img src={`data:image/jpeg;base64,${item.image}`} alt={item.title} />
                <St.PropertyInfo>
                  <St.PropertyTitle>{item.title}</St.PropertyTitle>
                  <St.PropertyLocation>{item.address === '주소 조회 실패' ? '' : item.address}</St.PropertyLocation>
                </St.PropertyInfo>
              </St.PropertyCard>
            ))}
          </St.GridContainer>
        ) : (
          <St.EmptyContainer>
            <St.EmptyMessage>내 물건이 없습니다. 물건을 등록해보세요!</St.EmptyMessage>
          </St.EmptyContainer>
        )}
      </St.Section>

      {/* 인기 있는 아이템 리스트 */}
      <St.Section>
        <St.SectionHeader>
          <St.SectionHeaderText>
            <St.SectionTitle>물물교환</St.SectionTitle>
            <St.SectionDescription>나와의 매칭을 기다리고 있어요!!</St.SectionDescription>
          </St.SectionHeaderText>
          {/* <St.ViewMoreLink href="#">더보기</St.ViewMoreLink> */}
        </St.SectionHeader>
        {myPopularItems.length > 0 ? (
          <St.ExchangeList>
            {myPopularItems.map((item) => (
              <St.ExchangeItem key={item.id}>
                <ExchangeImage src={item.image} alt={item.title} />
                <St.ExchangeInfo>
                  <St.ExchangeTitle>{item.title}</St.ExchangeTitle>
                  <St.ExchangeDescription>{item.address}</St.ExchangeDescription>
                </St.ExchangeInfo>
              </St.ExchangeItem>
            ))}
          </St.ExchangeList>
        ) : (
          <St.EmptyContainer>
            <St.EmptyMessage>선택한 물건과 관련된 교환 요청이 없습니다.</St.EmptyMessage>
          </St.EmptyContainer>
        )}
      </St.Section>
    </St.Container>
  );
};

export default MyPage;
