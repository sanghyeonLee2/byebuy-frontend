import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 가져옵니다.
import { BtnWrap, Logo, LogoWrap, SignupBtn } from './AuthPage.style';
import { iconMap } from '../../components/icons/iconMap';

function AuthPage(props) {
  const navigate = useNavigate();
  const logoSrc = iconMap.logo;

  return (
    <>
      <LogoWrap>
        <Logo src={logoSrc} alt={'로고'} />
      </LogoWrap>
      <BtnWrap>
        <button
          onClick={() => {
            navigate('/signin');
          }}
        >
          로그인
        </button>
        <SignupBtn
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </SignupBtn>
      </BtnWrap>
    </>
  );
}

export default AuthPage;
