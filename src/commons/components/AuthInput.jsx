import React from 'react';
import { Icon, Input, InputWrap, Label } from './AuthInput.style';
import { iconMap } from '../../components/icons/iconMap';

function AuthInput({ label, type, placeholder }) {
  return (
    <>
      <Label>{label}</Label>
      <InputWrap>
        <Input type={type} placeholder={placeholder} />
        {type === 'password' && <Icon src={iconMap.check} alt="비밀번호 체크" />}
        {type === 'email' && <Icon src={iconMap.me} alt="아이디 체크" />}
      </InputWrap>
    </>
  );
}

export default AuthInput;
