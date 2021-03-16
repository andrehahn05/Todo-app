import React, { useMemo } from "react";
import * as S from "./styles";
import { format } from "date-fns";
import TypeIcons from "../../utils/typeIcons";

function TaskCard(props) {
  const date = useMemo(() => format(new Date(props.when), "dd/MM/yyyy"));
  const hour = useMemo(() => format(new Date(props.when), "HH:mm"));

  return (
    <S.Container>
      {TypeIcons.map((e, i) => (
        <span key={i}>{TypeIcons[e]}</span>
      ))}

      <S.TopCard>
        <div>
          <span> {TypeIcons[props.type]}</span>
        </div>
        <p>{props.title}</p>
      </S.TopCard>

      <S.BottonCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </S.BottonCard>
    </S.Container>
  );
}
export default TaskCard;
