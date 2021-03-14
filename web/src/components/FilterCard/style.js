
import styled from 'styled-components';
import {FilterAlt} from '@styled-icons/boxicons-regular/FilterAlt';


export const Container = styled.div`
 display:flex;
  width:160px;
  height:60px;
  padding:10px;
   margin-top:10px;
  background:${props => props.actived?' #562596':'#392d71'};
  border-radius:8px;
  flex-direction:column; 
  color:#bea187; 
  font-size:0.9em; 
  @media (max-width:768px){
    font-size:0.9em; 
   
  }  
  @media (max-width:320px){
    font-size:0.8em; 
   
  }
  cursor:pointer; 
  
    &:hover{
      box-shadow:1px 1px  #562596;
    -webkit-transform: translateX(-1px);           
      transform: translateX(-1px);
      background:#562596;
      transition:all 0.3s;
  }

   span{
     align-self: flex-end;
   }

` ;
export const Filter = styled(FilterAlt) `
  color:#bea187;
  display:flex;
  width:25px;
  height:25px;

`;   


/* background: */
  /* #392d71
     #562596
  #2e3881
  #bea187
  #FEFEFE
  #E1E1DA */