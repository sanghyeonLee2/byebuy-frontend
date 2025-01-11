import React, { useEffect, useState } from 'react';
import {
  ExplorationHeader,
  FilterBtn,
  ImgWrap,
  MyProductWrap,
  ProductImg,
  ProductInfoWrap,
  ProductTitleWrap,
} from './ExplorationPage.style';
import { iconMap } from '../../components/icons/iconMap';
import { getItem, getMyItem } from '../../commons/api/item.api';

function ExplorationPage(props) {
  const { filerList, myProduct } = iconMap;
  const [items, setItems] = useState([]); // 위치 기반 아이템 상태
  const [myItems, setMyItems] = useState([]); // 개인 아이템 상태
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              const locationData = await getItem({ latitude, longitude, meters: 500 });
              setItems(locationData.items);

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

  return (
    <>
      <ExplorationHeader>
        <FilterBtn>
          <img src={filerList} alt="필터" />
          <span>500m 이내</span>
        </FilterBtn>
        <MyProductWrap>
          <span>내물건</span>
          <img src={myProduct} alt={myItems.title} />
        </MyProductWrap>
      </ExplorationHeader>

      {loading && <p>Loading items...</p>}

      <div>
        {items.length > 0 ? (
          items.map((item, index) => (
            <ProductImg key={index} index={index}>
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
      </div>
    </>
  );
}

export default ExplorationPage;
