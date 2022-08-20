import React from "react";
import {useState} from 'react';
import Link from "./Link";
import Link2 from "./Link2";

export default function Login() {

const [usuario, setUsuario] = useState()
const [numero, setNumero] = useState()

const entrar = () => {
    localStorage.setItem('usuario', usuario)
  }
const mult = () => {
    sessionStorage.setItem('numero', numero*10)
  }
  return (
    <div>
        <h1>Login</h1>
        <Link/>
    <input placeholder='login' onChange={(e) => setUsuario(e.target.value)} /><br />
      <input placeholder='senha' type='password' /><br />
      <button onClick={() => entrar()}>Entrar</button> <br/><br/>
        <Link2 />
      <input placeholder='numero' onChange={(e) => setNumero(e.target.value)} /><br />
      <button onClick={() => mult()}>multiplicar</button> <br/><br/>
    </div>
  );
}