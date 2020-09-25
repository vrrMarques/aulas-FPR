import Head from "next/head";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import List from "../src/components/List";
import { updateParameter } from "../src/helpers/url";

function Page() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [orderListagem, setOrderListagem] = useState();
  const [listagem, setListagem] = useState("todos");
  const [controle, setControle] = useState();

  const url = "https://aguaviva-rp.firebaseio.com/teste.json";

  function compared(a, b) {
    if (a[1].nome < b[1].nome) return -1;
    if (a[1].nome > b[1].nome) return 1;
    return 0;
  }

  useEffect(() => {
    if (data) {
      var array = Object.entries(data);
      array.sort(compared);
      setOrderListagem(array);
    }
  }, [data]);

  useEffect(() => {
    setTimeout(function () {
      setLoading(true);
      setOrderListagem;
      Axios.get(url).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }, 600);
  }, [controle]);

  return (
    <>
      <Head>
        <title>Igreja Batista Água Viva - Ribeirão Pires</title>
      </Head>
      <div className="container">
        <div className="header">
          <img src="/images/logo.jpg" />
          <h1>Listagem de controle de presença no culto</h1>
        </div>
        {data && (
          <>
            <div className="select">
              <label>Selecione a listagem do culto que deseja ver</label>
              <select
                onChange={(e) => {
                  setListagem(e.target.value);
                }}
              >
                <option value="todos">Todos</option>
                {/* <option value="sabado">Sabado - 19hs</option> */}
                <option value="manha">Domingo - 9hs</option>
                <option value="noite">Domingo - 18hs</option>
              </select>
            </div>
            {/* {listagem == "sabado" && (
              <List
                titulo={"Sabado - 19hs"}
                culto={"sabado"}
                orderListagem={orderListagem}
                chegada={true}
                setControle={setControle}
                controle={controle}
              />
            )} */}
            {listagem == "manha" && (
              <List
                titulo={"Domingo - 9hs"}
                culto={"manha"}
                orderListagem={orderListagem}
                chegada={true}
                setControle={setControle}
                controle={controle}
              />
            )}
            {listagem == "noite" && (
              <List
                titulo={"Domingo - 18hs"}
                culto={"noite"}
                orderListagem={orderListagem}
                chegada={true}
                setControle={setControle}
                controle={controle}
              />
            )}
            {listagem == "todos" && (
              <>
                {/* <List
                  titulo={"Sabado - 19hs"}
                  culto={"sabado"}
                  orderListagem={orderListagem}
                  chegada={true}
                  setControle={setControle}
                  controle={controle}
                /> */}
                <List
                  titulo={"Domingo - 9hs"}
                  culto={"manha"}
                  orderListagem={orderListagem}
                  chegada={true}
                  setControle={setControle}
                  controle={controle}
                />
                <List
                  titulo={"Domingo - 18hs"}
                  culto={"noite"}
                  orderListagem={orderListagem}
                  chegada={true}
                  setControle={setControle}
                  controle={controle}
                />
              </>
            )}
            <div className="box-voltar">
              <a href="/" className="button">
                Voltar
              </a>
            </div>
          </>
        )}

        {loading && (
          <p className="carregando">
            <img src="/images/loading.gif" />
            <span>Carregando...</span>
          </p>
        )}
      </div>
    </>
  );
}

export default Page;
