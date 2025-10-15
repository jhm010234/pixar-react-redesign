import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 32px 200px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: flex;
    padding: 28px;
    align-items: center;
    justify-content: space-between;


  }

  @media (max-width: 768px) {
    display: flex;
    padding: 24px;
    justify-content: space-between;
   align-items: center;

  }

`;

export const LogoImg = styled.img`
    display: flex;

    @media (max-width: 1024px) {
    display: flex;
    width: 100px;
  }

    @media (max-width: 768px) {
    display: flex;
    width: 80px;
  }
`;

export const TabMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 96px;
  font-size: 18px;

  @media (max-width: 1024px) {
    display: flex;
    font-size: 14px;
    gap: 32px;
  }
   @media (max-width: 768px) {
    display: none;
  }
`;

export const SNSMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;

  @media (max-width: 1024px) {
    display: flex;
    gap: 16px;

      img {
      width: 16px;
    }
  }

   @media (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
    display: none;

    @media (max-width: 768px) {
    display: flex;
  }
`;