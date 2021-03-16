import styled from "styled-components";
import { CheckmarkCircle } from "@styled-icons/ionicons-outline/CheckmarkCircle";
import { Bell } from "@styled-icons/bootstrap/Bell";

export const Container = styled.header`
  width: 100%;
  display: flex;
  border-bottom: solid 5px #bea187;
`;

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
  background: #392d71;
  height: 70px;
  h1 {
    color: #bea187;
    font-size: 34px;
    margin-left: 20px;
    display: flex;
    align-items: center;
  }
`;

export const RightSide = styled(LeftSide)`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  ul,
  li,
  a,
  button {
    display: flex;
    align-items: center;
    align-self: auto;
    padding-right: 10px;
    color: #bea187;
    font-size: 1em;
    cursor: pointer;

    &:hover {
      color: #fefefe;
      
    }
    @media (max-width: 928px) {
      padding: 5px;
    }
    @media (max-width: 768px) {
      font-size: 0.9em;
      padding: 5px;
    }
    @media (max-width: 320px) {
      font-size: 0.8em;
      padding: 2px;
    }
  }

  .Dividir::after {
    content: "|";
    color: #bea187;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 15px;
  }
  #notification {
    span {
      color: #bea187;
      height: 24px;
      width: 23px;
      border: solid 1px #bea187;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      position: relative;
      top: -5px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Check = styled(CheckmarkCircle)`
  display: flex;
  color: #bea187;
  height: 36px;
`;

export const IconBell = styled(Bell)`
  color: #bea187;
  height: 2em;
`;
