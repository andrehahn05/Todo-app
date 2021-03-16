import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 150px;
  box-shadow: -3px 1px 13px -2px #392d71;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  justify-content:space-around; 
  font-size:0.9em;
  overflow:hidden;
  margin:7px;
  

  &:hover{
    opacity:0.8;
    box-shadow:1px 1px  #562596;
    transition:all 0.4s;
    cursor:pointer; 

  }
  @media (max-width:320px){
    font-size:0.8em; 
   
  }
  
`;

export const TopCard = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-top:8px;
overflow:hide;
 p {
  display:flex; 
   padding-top:8px;
   padding-left:4px;
       font-weight:550;
       color:#392d71;

 } 
span {
  display:flex;
  justify-content:center;
  padding-top:14px;
  color:#392d71;
  }

div {
  height:76px; 
  width:70px;
  border-radius:50%;
  background:#562596;
}  

`;

export const BottonCard = styled.div`
    font-size:0.9em;
    color:#562596;
    display:flex;
    justify-content:space-between;
    padding:10px;
    strong {
      font-weight:bold;
    }
`;

