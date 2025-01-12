import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1, span, label{
    color: white;
  }
  input {
    border-radius: 12px;
  }
  body {
    // TODO: 폰트가 정해지면 적용 예정
    /* font-family:  */
    height: 100dvh;
    margin: 0;
    display: flex;
    justify-content: center;
  }
 #root {
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 100vh;
  width: 375px;
  overflow: hidden; 
  background-color: #252528;
 }
  li {
    list-style: none;
  }

  button {
  border: none;
  outline: none;
  width: 100%;
  background-color: #8768FF;
  color: #fff;
  padding: 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s, filter 0.2s;
  
  &:hover {
    filter: grayscale(50%); /* 색상에서 50% 정도 흑백 효과 적용 */
  }
}

`;
