import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Form({
  titulo,
  culto,
  orderListagem,
  remocao,
  chegada,
  setControle,
  controle,
}) {
  const [soma, setSoma] = useState();
  // const doRemove = (id, data) => {
  //   remove(`https://aguaviva-rp.firebaseio.com/teste/${id}.json`, data);
  // };
  const remove = (url, data) => {
    Axios.delete(url).then(() => {
      alert(`você removeu ${data.nome} da listagem`);
      window.location = "/remocao.html";
    });
  };
  const doEdit = (id, data) => {
    setControle(!controle);
    if (data.chegada) {
      edit(`https://aguaviva-rp.firebaseio.com/teste/${id}.json`, {
        ...data,
        chegada: false,
      });
    } else {
      edit(`https://aguaviva-rp.firebaseio.com/teste/${id}.json`, {
        ...data,
        chegada: true,
      });
    }
  };
  const edit = (url, data) => {
    Axios.put(url, data).then(() => {
      // if (data.chegada) {
      //   alert(`${data.nome} confirmou a presença no culto`);
      // } else {
      //   alert(`você tirou a confirmação de ${data.nome} do culto`);
      // }
      // window.location = "/controle.html";
    });
  };

  // useEffect(() => {
  //   let fetchListagem;
  //   setTimeout(function () {
  //     const fetch = async () => {
  //       fetchListagem = await fetchTeacherMentory();
  //       setListMentory(fetchListagem);
  //     };
  //     fetch();
  //   }, 1000);
  // }, [mod]);

  const contadorChegada = orderListagem?.filter((list) => {
    return list[1].chegada === true && list[1].culto == culto;
  });

  const contadorCriancas = orderListagem?.filter((list) => {
    return list[1].culto == culto;
  });
  useEffect(() => {
    if (contadorCriancas) {
      const soma1 = [...contadorCriancas];
      const soma2 = soma1.map((som) => {
        return parseInt(som[1].criancas);
      });
      let total;
      if (soma2.length >= 1) {
        total = soma2.reduce((acumulado, x) => {
          // console.log(`${acumulado}+${x} = ${acumulado + x}`);
          return acumulado + x;
        });
      } else {
        total = 0;
      }

      setSoma(total);
    }
  }, [contadorCriancas]);

  return (
    <>
      <div className="list-header">
        <h1>{titulo}</h1>
        {contadorChegada?.length > 0 && chegada && (
          <span>
            <small className="contagem">{contadorChegada?.length}</small>
            {contadorChegada?.length == 1 && <> pessoa chegou </>}
            {contadorChegada?.length != 1 && <> pessoas chegaram </>}
            no culto
          </span>
        )}
      </div>
      {/* {soma != 0 && !chegada && !remocao && (
        <div className="list-criancas">
          <span>
            <img src="images/bebe.svg" width="25" />
            <small>
              {" "}
              <b>{soma}</b>{" "}
              {soma == 1
                ? "criança estará presente"
                : "crianças estarão presentes"}{" "}
              para o cultinho
            </small>
          </span>
        </div>
      )} */}
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Discipulado</th>
            {/* {!chegada && !remocao && <th>Crianças</th>} */}
            {chegada && <th>Controle Servos</th>}
            {remocao && <th>Status</th>}
          </tr>
        </thead>
        <tbody>
          {orderListagem && (
            <>
              {orderListagem.map((individuo) => {
                return (
                  <>
                    {individuo.map((ind) => {
                      if (ind.culto == culto) {
                        return (
                          <tr key={ind}>
                            <td>
                              {ind.nome} {ind.sobrenome}
                            </td>
                            <td>{ind.rede}</td>
                            {/* {!chegada && !remocao && (
                              <td>{ind.criancas ? ind.criancas : "0"}</td>
                            )} */}
                            {chegada && (
                              <td onClick={(e) => doEdit(individuo[0], ind)}>
                                {ind.chegada ? (
                                  <img
                                    src="images/carraca.svg"
                                    className="certo"
                                  />
                                ) : (
                                  <img
                                    src="images/carraca.svg"
                                    className="nao_certo"
                                  />
                                  // <div className="nao_chegou"></div>
                                )}
                              </td>
                            )}
                            {remocao && (
                              <td>
                                <button
                                  className="remove"
                                  onClick={(e) => doRemove(individuo[0], ind)}
                                >
                                  Remover
                                </button>
                              </td>
                            )}
                          </tr>
                        );
                      }
                    })}
                  </>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </>
  );
}
