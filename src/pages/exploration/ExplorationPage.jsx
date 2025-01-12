import React, { useEffect, useState } from 'react';
import {
  ExplorationHeader,
  FilterBtn,
  MyProductWrap,
  ProductImg,
  ProductInfoWrap,
  ProductTitleWrap,
  AnimationBox,
  ItemsContainer, // Added scrollable container
} from './ExplorationPage.style';
import { iconMap } from '../../components/icons/iconMap';
import { getItem, getMyItem, patchItem } from '../../commons/api/item.api';
import useHeaderNavigation from '../../commons/hooks/useHeaderNavigation';
import { useNavigate } from 'react-router-dom';

function ExplorationPage(props) {
  const { filerList } = iconMap;
  const [items, setItems] = useState([]); // 위치 기반 아이템 상태
  const [myItems, setMyItems] = useState([]); // 개인 아이템 상태
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null); // 클릭된 아이템의 인덱스
  const [showBox, setShowBox] = useState(false); // 애니메이션 박스 표시 여부
  const [animationCompleted, setAnimationCompleted] = useState(false); // 애니메이션 완료 여부
  const goodSrc = iconMap.good;
  useHeaderNavigation({
    left: 'backArrow',
    title: '물품탐색',
    right: 'empty',
  });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              const locationData = await getItem({ latitude, longitude, meters: 500 });
              setItems([...locationData.items]);

              const myItemsData = await getMyItem();
              setMyItems(myItemsData.items.find((item) => item.isMain));
            },
            (error) => {
              console.log('Error getting location:', error);
            },
          );
        } else {
          console.log('Geolocation is not supported by this browser');
        }
      } catch (err) {
        console.log('Error fetching items:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const handleClick = (index, requestedItemId) => {
    patchItem({ requesterItemId: myItems.id, requestedItemId });
    setSelectedIndex(index); // 클릭된 요소의 인덱스를 저장
    setShowBox(true); // 애니메이션 박스를 표시
    setAnimationCompleted(false); // 애니메이션 시작

    // Reordering logic: Move the clicked item to the front
    const updatedItems = [...items];
    const [clickedItem] = updatedItems.splice(index, 1);
    updatedItems.unshift(clickedItem);
    setItems(updatedItems);

    // 일정 시간 후 박스를 화면 밖으로 나가게 하는 타이머
    setTimeout(() => {
      setShowBox(false); // 애니메이션 박스 숨기기
      setAnimationCompleted(true); // 애니메이션 완료
    }, 3000); // 3초 후 박스를 숨깁니다.
  };

  return (
    <>
      <ExplorationHeader>
        <FilterBtn>
          <img src={filerList} alt="필터" />
          <span>500m 이내</span>
        </FilterBtn>
        <MyProductWrap onClick={() => navigate('/myitem')}>
          <span>내물건</span>
          <img src={`data:image/jpeg;base64,${myItems.image}`} alt={myItems?.title} width={30} height={30} />
        </MyProductWrap>
      </ExplorationHeader>
      {loading && <p>Loading items...</p>}

      {/* Scrollable container for items */}
      <ItemsContainer>
        {items.length > 0 ? (
          items.map((item, index) => (
            <ProductImg
              style={{
                backgroundImage: `url('data:image/jpeg;base64,${item.image}')`, // Base64 이미지 삽입
              }}
              key={item.id}
              index={index}
              onClick={() => handleClick(index, item.id)} // 클릭 시 처리
              isSelected={selectedIndex === index} // 선택된 요소인지 확인
              isReordered={index === 0} // First item after reorder
            >
              <ProductInfoWrap>
                <ProductTitleWrap>
                  <h3>{item?.title}</h3>&nbsp;
                  <span>{item?.address}</span>
                </ProductTitleWrap>
                <p>{item?.description}</p>
              </ProductInfoWrap>
            </ProductImg>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </ItemsContainer>

      {/* 애니메이션 박스 */}
      {showBox && !animationCompleted && (
        <AnimationBox>
          <div>
            <span>like</span>
            <img src={goodSrc} alt="굿굿" />
          </div>
        </AnimationBox>
      )}
    </>
  );
}

export default ExplorationPage;
