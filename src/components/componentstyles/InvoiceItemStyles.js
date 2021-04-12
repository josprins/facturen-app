import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 12% 27.5% 16% 22.5% 19% 3%;
  grid-template-rows: 72px;
  align-items: center;
  width: 100%;
  padding: 0px 32px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 7px 6px 22px -6px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: 7px 6px 22px -6px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 7px 6px 22px -6px rgba(0, 0, 0, 0.29);

  @media (max-width: 715px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 134px;
    align-items: flex-start;
    justify-content: space-around;
    padding: 32px 32px;
  }

  @media (max-width: 500px) {
    height: 134px;
    padding-right: 0;
  }
`;

export const ItemID = styled.p`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.25px;

  @media (max-width: 715px) {
    margin-bottom: 18px;
    order: 1;
  }
`;

export const ItemText = styled.p`
  font-size: 12px;
  font-weight: medium;
  color: #7e88c3;
`;

export const ItemAmount = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding-left: 10px;
  letter-spacing: 0.8px;

  @media (max-width: 715px) {
    order: 3;
    padding-left: 0;
  }
`;

export const ItemStatus = styled.div`
  width: 100px;
  padding: 16px 0;
  text-align: center;
  background-color: #d3f5e9;
  color: #33d69f;
  font-size: 12px;
  font-weight: bold;
  border-radius: 6px;

  @media (max-width: 715px) {
    order: 5;
    margin-left: auto;
    margin-right: 32px;
  }
`;
