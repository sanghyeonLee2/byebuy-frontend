import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register } from '../../commons/api/example.api';
import AuthInput from '../../commons/components/AuthInput';
import useHeaderNavigation from '../../commons/hooks/useHeaderNavigation';
import * as S from './SignupPage.style';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    name: '',
  });
  const navigate = useNavigate();

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
      const response = await Register(formData);
      console.log(response);

      if (response === '') {
        alert('회원가입에 성공했습니다!');
        navigate('/home');
      } else {
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('회원가입 실패', error);
      alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  useHeaderNavigation({
    left: 'backArrow',
    title: '',
    right: 'empty',
  });

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.Title>회원가입</S.Title>
        <AuthInput
          label={'이름'}
          type={'text'}
          placeholder={'이름을 입력해주세요'}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <AuthInput
          label={'아이디'}
          type={'userId'}
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
        <button type="submit">회원가입</button>
      </form>
    </S.Container>
  );
};

export default SignupPage;
