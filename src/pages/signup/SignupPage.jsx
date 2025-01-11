import React from 'react';
import { SignupWrap } from './SignupPage.style';

function SignupPage(props) {
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

export default SignupPage;
