import Snowfall from 'react-snowfall';
import useHeaderNavigation from '../../commons/hooks/useHeaderNavigation';
import * as S from './Matching.styles';

const MatchingPage = () => {
  useHeaderNavigation({
    left: 'backArrow',
    title: '물물교환',
    right: 'empty',
  });

  return (
    <S.Wrapper>
      <Snowfall />
      <S.ContentWrapper>
        <S.MatchingRowWrapper>
          <S.MatchingColumnWrapper>
            <S.MatchingImageWrapper>
              <S.MatchingImage src={'src/assets/recommendSelfie.png'} />
            </S.MatchingImageWrapper>
            <S.MatchingText>럭키비키</S.MatchingText>
          </S.MatchingColumnWrapper>
          <S.MatchingColumnWrapper>
            <S.MatchingImageWrapper>
              <S.MatchingImage src={'src/assets/recommendSelfie.png'} />
            </S.MatchingImageWrapper>
            <S.MatchingText>추천</S.MatchingText>
          </S.MatchingColumnWrapper>
        </S.MatchingRowWrapper>
        <S.TextWrapper>
          <S.Title>MATCHED!</S.Title>
          <S.Duration>물물교환을 시작할 수 있어요</S.Duration>
        </S.TextWrapper>
      </S.ContentWrapper>
      <S.SubmitButton>등록하기</S.SubmitButton>
    </S.Wrapper>
  );
};

export default MatchingPage;
