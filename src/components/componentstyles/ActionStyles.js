import styled from 'styled-components';

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 25px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const SubTitle = styled.h6`
  font-size: 12px;
  font-weight: medium;
  color: #888eb0;
  letter-spacing: -0.25px;
`;

export const FilterTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 400px) {
    margin-right: 8px;
  }
`;

export const Select = styled.div`
  position: fixed;
  display: none;
  width: 192px;
  border-radius: 8px;
  z-index: 2;
  cursor: pointer;
  border: none;
  font-size: 12px;
  list-style: none;
  font-weight: 700;
  letter-spacing: -0.25px;
  font-family: 'Sparten', sans-serif;
  background-color: #fff;
  padding-left: 24px;
  padding-top: 24px;
  padding-bottom: 12px;
  margin-top: 14px;
  margin-left: -35px;
  box-shadow: 7px 6px 22px -6px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: 7px 6px 22px -6px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 7px 6px 22px -6px rgba(0, 0, 0, 0.29);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  border: none;
  justify-content: space-around;
  width: 150px;
  height: 48px;
  border-radius: 24px;
  background-color: #7c5dfa;
  font-family: 'Sparten', sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  margin-left: 40px;

  @media (max-width: 400px) {
    justify-content: center;
    margin-left: 7px;
    width: 90px;
  }
`;

export const ImageContainer = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 100%;
  background-color: white;
  margin-right: -5px;

  @media (max-width: 400px) {
    margin-right: 5px;
  }
`;

export const Image = styled.img`
  position: relative;
  top: 11px;
  left: 1px;
`;
