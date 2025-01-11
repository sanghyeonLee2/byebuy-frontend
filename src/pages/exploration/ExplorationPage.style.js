import styled from 'styled-components';

export const ExplorationHeader = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #262629;
  margin-bottom: 30px;
  span {
    font-size: small;
  }
`;
export const FilterBtn = styled.button`
  width: 110px;
  height: 34px;
  border: 1px solid #58585f;
  border-radius: 26px;
  background-color: #313133;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyProductWrap = styled.div`
  width: 100px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgWrap = styled.div`
  padding: 30 0px;
`;
export const ProductImg = styled.div`
  margin: 0 auto;
  height: 536px;
  width: ${(props) => (props.index === 0 ? '100%' : '90%')};
  border-top-right-radius: 0;
  border-radius: ${(props) => (props.index > 0 ? '0' : '12px')};
  background-color: gray;
  padding-top: 420px;
`;
export const ProductInfoWrap = styled.div`
  height: 85px;
  padding: 0 20px;
  span {
    font-size: x-small;
  }

  h3,
  p {
    color: white;
  }
  p {
    font-size: small;
  }
`;
export const ProductTitleWrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 7px;
`;
