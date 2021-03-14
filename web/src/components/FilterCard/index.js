import React from 'react';
import * as S from './style';

function FilterCard(props){
  return(
    
    <S.Container actived = {props.actived}>
       <S.Filter/>
       <span>{props.title}</span>
    </S.Container>
    
  )
}

export default FilterCard;