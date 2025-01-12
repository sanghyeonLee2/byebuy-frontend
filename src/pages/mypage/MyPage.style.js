import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  padding-top: 1rem;
`;

export const ProfileCard = styled.div`
  background-color: #39393d;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileInfo = styled.div``;

export const Name = styled.h2`
  font-size: 18px;
  margin-bottom: 4px;
  font-weight: 400;
`;

export const Username = styled.p`
  color: #969696;
  font-size: 14px;
`;

export const IconButton = styled.button`
  max-width: 36px;
  height: 36px;
  background-color: #58585f;
  border: none;
  border-radius: 8px;
  padding: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SectionHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  color: #969696;
`;

export const ViewMoreLink = styled.a`
  color: #8768ff;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

export const PropertyCard = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PropertyInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
`;

export const PropertyTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 4px;
`;

export const PropertyLocation = styled.p`
  font-size: 12px;
  color: #ddd;
`;

export const ExchangeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ExchangeItem = styled.div`
  background-color: #2c2c2c;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const ExchangeImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
`;

export const ExchangeInfo = styled.div`
  flex-grow: 1;
`;

export const ExchangeTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 4px;
`;

export const ExchangeDescription = styled.p`
  font-size: 14px;
  color: #8768ff;
`;

export const EmptyContainer = styled.div`
  height: 164px;
  align-content: center;
`;

export const EmptyMessage = styled.h4`
  font-weight: 400;
  color: #8768ff;
`;

export const RegisterButton = styled.button`
  border-radius: 12px;
  position: fixed;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 320px;
  cursor: pointer;

  padding: 16px;
  margin-top: auto;

  background-color: #8768ff;

  color: #fff;
`;
