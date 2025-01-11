import React from 'react';
import { SignupWrap } from './SigninPage.style';

function SigninPage(props) {
  return (
    <SignupWrap>
      <form>
        <input type="text" />
        <input type="password" />
      </form>
      <button type="button"></button>
    </SignupWrap>
  );
}

export default SigninPage;
