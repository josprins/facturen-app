import styled from 'styled-components';

export const CreateInvoiceContainer = styled.div`
  display: block;
  height: 100vh;
  width: 40%;
  position: absolute;
  top: 0;
  left: 103px;
  background-color: #fff;
  overflow: visible;
  z-index: 5;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 56px 56px 0 56px;
`;

export const Darken = styled.div`
  display: block;
  height: 100vh;
  width: 65%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 50%;
  overflow: visible;
  z-index: 4;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 32px;
`;

export const InputFullWidth = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
