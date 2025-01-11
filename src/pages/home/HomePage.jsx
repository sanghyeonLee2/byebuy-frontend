import { useNavigate } from 'react-router-dom';
import * as S from './HomePage.style';

const Home = () => {
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
