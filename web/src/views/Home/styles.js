import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Content = styled.div`
  width: 100%;
  margin-bottom: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FilterArea = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  button {
    background: none;
    border: none;
  }
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid #20295f;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  margin-bottom: 30px;

  h3 {
    color: #20295f;
    position: relative;
    top: 10px;
    background: #f4f2f7;
    padding: 0 15px;
    
  }
`;
