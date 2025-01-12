import React, { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';
import useHeaderNavigation from '../../commons/hooks/useHeaderNavigation';
import * as S from './Matching.styles';
import { getMatchedItemsInfo } from '../../commons/api/interest.api';
import { useLocation } from 'react-router-dom';

const MatchingPage = () => {
  useHeaderNavigation({
    left: 'backArrow',
    title: '물물교환',
    right: 'empty',
  });

  const location = useLocation();
  const [matchedItems, setMatchedItems] = useState(null);
  const interestId = location.state?.interestId;

  useEffect(() => {
    if (interestId) {
      const fetchMatchedItems = async () => {
        try {
          const response = await getMatchedItemsInfo(interestId);
          setMatchedItems(response.items);
        } catch (error) {
          console.error('Failed to fetch matched items info', error);
        }
      };

      fetchMatchedItems();
    }
  }, [interestId]);

  // 채팅방 클릭 핸들러
  const handleRoomClick = (interestId) => {
    navigate('/chat', { state: { interestId } });
  };

  if (!matchedItems) {
    return <S.Wrapper>Loading...</S.Wrapper>;
  }

  return (
    <S.Wrapper>
      <Snowfall />
      <S.ContentWrapper>
        <S.MatchingRowWrapper>
          {matchedItems.map((item, index) => (
            <S.MatchingColumnWrapper key={index}>
              <S.MatchingImageWrapper>
                <S.MatchingImage src={item.image} alt={item.name} />
              </S.MatchingImageWrapper>
              <S.MatchingText>{item.name}</S.MatchingText>
            </S.MatchingColumnWrapper>
          ))}
        </S.MatchingRowWrapper>
        <S.TextWrapper>
          <S.Title>MATCHED!</S.Title>
          <S.Duration>물물교환을 시작할 수 있어요</S.Duration>
        </S.TextWrapper>
      </S.ContentWrapper>
      <S.SubmitButton onClick={() => handleRoomClick}>등록하기</S.SubmitButton>
    </S.Wrapper>
  );
};

export default MatchingPage;
