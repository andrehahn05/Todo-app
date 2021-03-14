import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;  
  display: flex;  
  flex-direction: column;
  align-items: center;
`

export const Form = styled.div`
  width: 50%;
  margin-bottom:70px;

`
/* background: */
  /* #392d71
     #562596
  #2e3881
  #bea187
  #FEFEFE
  #E1E1DA 
  #f4f2f7*/

export const TypeIcons = styled.div`
  width:100%;//teste 100 768
  display:flex;
  @media (max-width:768px){
  flex-wrap:wrap;
   flex-direction:row;
   
  } 
  /* overflow-x: auto; */
  /* margin:auto;// teste */
  align-items:center;
  justify-content: center;
  
  .inative{
    opacity: 0.4;
    outline:none;
  }

  button {
    border: none;
    background: none;
      
  }

  
  div {

  height:65px; 
  width:65px;
  border-radius:50%;
  background:#562596;
  cursor: pointer;

  margin:30px 5px 10px;
  
 &:hover{
      opacity: 0.8;
    } 
} 

  span{
    display:flex;
    /* align-items:center; */
    justify-content:center;
    padding-top:10px;
    
  }

`

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span{
    color: #2e3881;
    margin: 5px 0;
  }

  input {
    font-size: 14px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #2e3881;
    background: #f4f2f7;
    &:hover{
      border-bottom: 1px solid #4173cfec;
    } 
    
  }

  /* img {
    width: 20px;
    height: 20px;
    position: relative;
    left: 90%;  
    bottom: 30px;
  } */

` 

export const TextArea = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span{
    color: #2e3881      ;
    margin: 5px 0;
  }

  textarea {
    font-size: 14px;
    padding:10px;
    background: #f4f2f7;
    border: 1px solid #2e3881;
    border-radius:5px;
    &:hover{
      border: 1px solid #4173cfec;
    } 
    
  }
`


export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    font-weight: bold;
    color: #20295F;
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }

  div {
    display: flex;
    align-items: center;
    color: #562596;
    font-weight: bold;
    font-size: 18px;
  }
`

export const Save = styled.div`
  width: 100%;
  margin-top: 20px;

  button {
    width: 100%;
    background: #562596;;
    border: none;
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }



`