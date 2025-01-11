import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 14px 12px;

  border-radius: 12px;

  background-color: #39393d;
`;

export const InputWrapper = styled.input`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-bottom: 16px;
  padding: 16px 10px;

  border-radius: 8px;
  border: 1px solid #44444a;
  outline: none;

  font-size: 14px;

  background-color: #58585f;
  color: #fff;

  &::placeholder {
    color: #acacac;
  }
`;

export const Text = styled.h4`
  font-size: 14px;

  color: #fff;

  margin-bottom: 5px;
`;

export const RegisterButton = styled.button`
  border-radius: 12px;

  padding: 16px 127px;
  margin-top: auto;

  background-color: #8768ff;

  color: #fff;
`;

export const ProductImage = styled.img`
  width: 88px;
  height: 88px;

  border-radius: 8px;

  margin-bottom: 16px;
`;

export const ImageUploadWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 88px;

  margin-bottom: 16px;

  border-radius: 8px;
  border: 1px solid #44444a;
  outline: none;

  background-color: #58585f;
`;

export const CategoryDefault = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-bottom: 16px;
  padding: 16px 10px;

  border-radius: 8px;
  border: 1px solid #44444a;
  outline: none;

  background-color: #58585f;
  color: #fff;

  cursor: pointer;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #acacac;
  border-radius: 8px;

  background-color: #58585f;
`;

export const CategoryArrow = styled.img`
  width: 20px;
  height: 20px;

  object-fit: fill;
`;

export const CategoryOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px solid rgba(172, 172, 172, 0.3); // #ACACAC with 30% opacit

  padding: 12px 16px;

  cursor: pointer;
`;

export const PlaceholderText = styled.p`
  font-size: 14px;

  color: ${({ isSelected }) => (isSelected ? '#fff' : '#acacac')};
`;

export const CategoryText = styled.p`
  font-size: 14px;

  color: #fff;
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  cursor: pointer;
`;

export const ImageUploadIcon = styled.img`
  /* position: absolute; */

  margin-bottom: 4px;

  width: 24px;
  height: 24px;
`;
