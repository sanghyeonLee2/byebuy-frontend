import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 가져오기
import AuthInput from '../../commons/components/AuthInput';
import * as S from './SigninPage.style';
import useHeaderNavigation from '../../commons/hooks/useHeaderNavigation';
import { Login } from '../../commons/api/example.api'; // 로그인 API 호출 함수

function SigninPage() {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
  });

  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Login(formData); // Login API 호출
      console.log(response); // 응답 결과 확인

      if (response) {
        alert('로그인에 성공했습니다!');
        localStorage.setItem('token', response.token);
        navigate('/home'); // /home 경로로 이동
      } else {
        alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
      }
    } catch (error) {
      console.error('로그인 실패', error);
      alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  useHeaderNavigation({
    left: 'backArrow',
    title: '홈',
    right: 'empty',
  });

  return (
    <S.SignupWrap>
      <form onSubmit={handleSubmit}>
        <S.Title>로그인</S.Title>
        <AuthInput
          label={'아이디'}
          type={'text'}
          placeholder={'아이디를 입력해주세요'}
          name="userId"
          value={formData.userId}
          onChange={handleChange}
        />
        <AuthInput
          label={'비밀번호'}
          type={'password'}
          placeholder={'비밀번호를 입력해주세요'}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">로그인</button>
      </form>
    </S.SignupWrap>
  );
}

export default SigninPage;
