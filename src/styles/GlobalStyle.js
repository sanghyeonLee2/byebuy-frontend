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
