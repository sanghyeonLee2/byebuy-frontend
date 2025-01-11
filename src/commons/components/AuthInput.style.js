import styled from 'styled-components';

export const InputWrap = styled.div`
  position: relative; /* Icon의 위치를 Input 위에 배치하기 위한 기준 */
  display: flex;
  flex-direction: column; /* label과 Input을 수직으로 배치 */
`;
export const Label = styled.label`
  display: block;
  margin: 10px 0;
`;
export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #58585f;

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%; /* Input 높이의 중앙 */
  right: 10px; /* Input의 왼쪽에서 간격 설정 */
  transform: translateY(-50%); /* 중앙 정렬 보정 */
  width: 20px;
  height: 20px;
  pointer-events: none; /* 입력 방해를 막기 위해 클릭 비활성화 */
  z-index: 1; /* Input 위로 올리기 위해 z-index 설정 */
`;
