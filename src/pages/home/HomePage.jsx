import { useNavigate } from 'react-router-dom';
import * as S from './HomePage.style';
import useHeaderNavigation from '../../commons/hooks/useHeaderNavigation';

const Home = () => {
  useHeaderNavigation({
    left: 'backArrow',
    title: '홈',
    right: 'empty',
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/example');
  };

  return (
    <S.Wrapper>
      홈페이지입니다
      <button onClick={handleClick}>예제 페이지로 이동</button>
    </S.Wrapper>
  );
};

export default Home;
