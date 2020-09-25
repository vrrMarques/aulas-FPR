import React, { useState, useEffect } from "react";
import { Posts } from "../../src/services/requests";
import Logo from "../../src/components/Logo";

function Page({ registros, query }) {
  const registroSelecionado = registros.filter((registro) => {
    return registro.id == query.id;
  });
  return (
    <div className="container">
      <Logo />
      <h2 className="subtitle">Detalhes</h2>
      <div className="detalhes">
        {registroSelecionado[0] && (
          <>
            <p>
              <b>#: </b> {registroSelecionado[0].id}
            </p>
            <p>
              <b>Title: </b>
              {registroSelecionado[0].title}
            </p>
            <p>
              <b>Conteúdo: </b>
              {registroSelecionado[0].body}
            </p>
          </>
        )}
      </div>
      <a className="voltar" href="/">
        Voltar
      </a>
    </div>
  );
}
Page.getInitialProps = async ({ query }) => {
  const registros = await Posts();
  return {
    registros,
    query,
  };
};

export default Page;
