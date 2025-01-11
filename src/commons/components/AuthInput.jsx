import React from 'react';
import { Icon, Input, InputWrap, Label } from './AuthInput.style';
import { iconMap } from '../../components/icons/iconMap';

function AuthInput({ label, type, placeholder }) {
  return (
    <>
      <Label>{label}</Label>
      <InputWrap>
        <Input type={type} placeholder={placeholder} />
        {type === 'password' && <Icon src={iconMap.check} />}
        {type === 'email' && <Icon src={iconMap.me} />}
      </InputWrap>
    </>
  );
}

export default AuthInput;
