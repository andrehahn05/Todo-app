import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// 11:11:11:11:11:11
function QrCode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);

  async function SaveMac(){
    if(!mac)
      alert('Informe o número que apareceu no celular!');
    else{
      await localStorage.setItem('@todo/macaddress', mac);
      setRedirect(true);
       window.location.reload();
    }
  }

  //72:CE:EA:3C:21:CD

  return (
    <S.Container>
      { redirect && <Redirect to="/"/> }
      <Header/>

      <S.Content>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <p>Suas atividades serão sincronizadas com a do seu celular.</p>
        <S.QrCodeArea>
          <Qr value='getmacaddress' size={250}/>
        </S.QrCodeArea>

        <S.ValidationCode>
          <span>Digite a código que apareceu no celular</span>
          <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
          <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
        </S.ValidationCode>
      </S.Content>



      <Footer/>
    </S.Container>
  )
}

export default QrCode;
