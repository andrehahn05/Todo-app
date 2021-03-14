import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import * as S from "./styles";
import typeIcons from "../../utils/typeIcons";
import { format } from "date-fns";
import isConnected from "../../utils/isConnected";
import api from "../../services/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Task({ match, props }) {
  const [type, setType] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [done, setDone] = useState(false);
  const [redirect, setRedirect] = useState(false);


  async function LoadDetails() {
    await api.get(`/task/${match.params.id}`).then((response) => {
      setType(response.data.type);
      setDone(response.data.done);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setDate(format(new Date(response.data.when), "yyyy-MM-dd"));
      setHour(format(new Date(response.data.when), "HH:mm"));
    });
  }

  async function Save() {
    if(!title)
      return alert("Informar o título da terefa");
   if(!description)
      return alert("Informar a descrição da terefa");
   if(!type)
      return alert("Selecionar o tipo da terefa");
   if(!date)
      return alert("Defina a data da terefa");
   if(!hour)
      return alert("Defina a hora da terefa");

    if (match.params.id) {
      await api
        .put(`/task/${match.params.id}`, {
          macaddress: isConnected,
          done,
          type,
          title,
          description,

          when: `${date}T${hour}:00.000`,
        })
        .then(() => setRedirect(true));
    } else {
      await api
        .post("/task", {
          macaddress: isConnected,
          done,
          type,
          title,
          description,
          when: `${date}T${hour}:00.000`,
        })
        .then(() => setRedirect(true));
    }
  }

  async function Remove() {
    const res = window.confirm("Deseja realmente remover a tarefa?");
    if (res == true) {
      await api
        .delete(`/task/${match.params.id}`)
        .then(() => setRedirect(true));
    }
  }

  useEffect(() => {
    if (!isConnected) setRedirect(true);
    LoadDetails();
  }, []);

  return (
    <S.Container>
      {redirect && <Redirect to="/" />}

      <Header />

      <S.Form>
        <S.TypeIcons>
          {typeIcons.map(
            (el, idx) =>
              idx > 0 && (
                <button type="button" onClick={() => setType(idx)}>
                  <div>
                    <span
                      className={type && type !== idx ? "inative" : ""}
                      key={idx}
                    >
                      {el}
                    </span>
                  </div>
                </button>
              )
          )}
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input
            type="text"
            placeholder="Título da terefa..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea
            rows={5}
            placeholder="Detalhes da tarefa..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input
            type="date"
            placeholder="00/00/00"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input
            type="time"
            placeholder="00:00"
            onChange={(e) => setHour(e.target.value)}
            value={hour}
          />
        </S.Input>

        <S.Options>
          <div>
            <input
              type="checkbox"
              checked={done}
              onChange={() => setDone(!done)}
            />
            <span>CONCLUÍDO</span>
          </div>
          {match.params.id && (
            <button type="button" onClick={Remove}>
              EXCLUIR
            </button>
          )}
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>
            SALVAR
          </button>
        </S.Save>
      </S.Form>

      <Footer />
    </S.Container>
  );
}

export default Task;
