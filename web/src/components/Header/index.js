import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import * as S from "./styles";
import isConnected from "../../utils/isConnected";

function Header(props) {
  const [lateCount, setLateCount] = useState();

  async function verify() {
    await api.get(`/task/filter/late/${isConnected}`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  useEffect(() => {
    verify();
  });

  async function Logout() {
    localStorage.removeItem("@todo/macaddress");
    window.location.reload();
  }
  return (
    <S.Container>
      <S.LeftSide>
        <h1>
          ToD<S.Check />
        </h1>
      </S.LeftSide>

      <S.RightSide>
        <ul>
          <li className="Dividir">
            <Link to="/">Início</Link>
          </li>
          <li className="Dividir">
            <Link to="/task">Nova Tarefa</Link>
          </li>
          
          {
          !isConnected ? 
          (
            <li className="Dividir">
              <Link to="/qrcode">Sincronizar Celular</Link>
            </li>
          ) : (
            <button type="button" onClick={Logout}>
              Sair
            </button>
          )}
        </ul>

        <button onClick={props.clickNotification} id="notification">
          <S.IconBell />
          <span>{lateCount}</span>
        </button>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
