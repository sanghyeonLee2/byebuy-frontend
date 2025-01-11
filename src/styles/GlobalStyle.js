import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    // TODO: 폰트가 정해지면 적용 예정
    /* font-family:  */
    height: 100dvh;
    margin: 0;
  }
 #root {
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  width: 375px;
  background-color: #252528;
 }
  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;
