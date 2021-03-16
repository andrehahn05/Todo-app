import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  width: 50%;

  h1 {
    color: #3c1e5f;
    font-weight: bold;
    font-size: 1.1em;
    padding-bottom: 10px;
  }
  p {
    color: #20295f;
    padding-bottom: 10px;
  }
`;

export const QrCodeArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;

  span {
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 10px;
  }

  input {
    font-size: 18px;
    padding: 10px;
    text-align: center;
    background: #cab1f1;
    border-radius: 10px;
    margin-bottom: 5px;
    margin-top: 10px;
    &:hover {
    }
  }

  button {
    font-weight: bold;
    background: #562596;
    color: #fff;
    font-size: 18px;
    padding: 10px;
    border-radius: 18px;
    border: none;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      background: #3cad62ec;
      transition: all 0.8s;
    }
  }
`;
