import Head from "next/head";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import List from "../src/components/List";

function Page() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [orderListagem, setOrderListagem] = useState();
  const [listagem, setListagem] = useState("todos");
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
    setLoading(true);
    setOrderListagem;
    Axios.get(url).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

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
                {/* <option value="sabado">Sabado - 115hs</option> */}
                <option value="manha">Sábado - 15hs</option>
                <option value="noite">Sábado - 17:30hs</option>
              </select>
            </div>
            {/* {listagem == "sabado" && (
              <List
                titulo={"Sabado - 115hs"}
                culto={"sabado"}
                orderListagem={orderListagem}
                remocao={true}
                chegada={false}
              />
            )} */}
            {listagem == "manha" && (
              <List
                titulo={"Sábado - 15hs"}
                culto={"manha"}
                orderListagem={orderListagem}
                remocao={true}
                chegada={false}
              />
            )}
            {listagem == "noite" && (
              <List
                titulo={"Sábado - 17:30hs"}
                culto={"noite"}
                orderListagem={orderListagem}
                remocao={true}
                chegada={false}
              />
            )}
            {listagem == "todos" && (
              <>
                {/* <List
                  titulo={"Sabado - 115hs"}
                  culto={"sabado"}
                  orderListagem={orderListagem}
                  remocao={true}
                  chegada={false}
                /> */}
                <List
                  titulo={"Sábado - 15hs"}
                  culto={"manha"}
                  orderListagem={orderListagem}
                  remocao={true}
                  chegada={false}
                />
                <List
                  titulo={"Sábado - 17:30hs"}
                  culto={"noite"}
                  orderListagem={orderListagem}
                  remocao={true}
                  chegada={false}
                />
              </>
            )}
          </>
        )}
        {loading && <p>Carregando...</p>}
        <div className="box-voltar">
          <a href="/" className="button">
            Voltar
          </a>
        </div>
      </div>
    </>
  );
}

export default Page;
