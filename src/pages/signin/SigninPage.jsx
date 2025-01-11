// LoginPage.js
import React from 'react';
import * as S from './SigninPage.style';
import AuthInput from '../../commons/components/AuthInput';
import useHeaderNavigation from '../../commons/hooks/useHeaderNavigation';

const SigninPage = () => {
  useHeaderNavigation({
    left: 'backArrow',
    title: '홈',
    right: 'empty',
  });
  return (
    <S.Container>
      <form>
        <S.Title>로그인</S.Title>
        <AuthInput label={'로그인'} type={'text'} placeholder={'이름을 입력해주세요'} />
        <AuthInput label={'아이디'} type={'email'} placeholder={'아이디를 입력해주세요'} />
        <AuthInput label={'비밀번호'} type={'password'} placeholder={'비밀번호를 입력해주세요'} />
        <button>로그인</button>
      </form>
    </S.Container>
  );
};
export default SigninPage;
