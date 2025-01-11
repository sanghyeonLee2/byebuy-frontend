import React, { useEffect, useState } from 'react';
import * as St from '../MyPage.style';
import useHeaderNavigation from '../../../commons/hooks/useHeaderNavigation';
import { getMyItem } from '../../../commons/api/item.api';
import { useNavigate } from 'react-router-dom';

const MyItemListPage = () => {
  useHeaderNavigation({
    left: 'backArrow',
    title: '내 물건',
    right: 'empty',
  });

  const [myItemList, setMyItemList] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 추가

  useEffect(() => {
    const fetchMyItemList = async () => {
      try {
        const response = await getMyItem();
        setMyItemList(response.items);
      } catch (error) {
        console.error('Failed to fetch my item list', error);
      }
    };

    fetchMyItemList();
  }, []);

  const handleRegisterClick = () => {
    navigate('/register'); // /register로 이동
  };

  return (
    <St.Container>
      {myItemList.length > 0 ? (
        <St.GridContainer>
          {myItemList.map((item) => (
            <St.PropertyCard key={item.id}>
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

      <St.RegisterButton onClick={handleRegisterClick}>상품 추가하기</St.RegisterButton>
    </St.Container>
  );
};

export default MyItemListPage;
