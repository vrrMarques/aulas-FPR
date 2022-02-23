import Head from "next/head";
import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
// import moment from "moment-timezone";
import Axios from "axios";

// import { console } from "window-or-global";


function Page() {

  //RENDIRAZAÇÃO CONDICIONAL OU CONDIÇÃO TERNARIA

  
  function initialGA() {
    ReactGA.initialize("UA-170909874-1");
    ReactGA.pageview(urlLocal);
  }
  let urlLocal;
  if (typeof window !== "undefined") {
    urlLocal = window.location?.href;
  }
  initialGA();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [nome, setNome] = useState();
  const [rede, setRede] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [culto, setCulto] = useState();
  const [criancas, setCriancas] = useState();
  const url = "https://aguaviva-rp.firebaseio.com/teste.json";
  var date = new Date();
  var dia_sem = date.getDay();

  // var dateMoment = moment(`${date}`);
  // dateMoment.tz("America/Sao_Paulo").format("ha z");
  // moment.locale("pt-BR");
  // const novaData = new Date(dateMoment);
  // var dia_sem = moment(novaData).format("dddd");
  const [qtdSabado, setQtdSabado] = useState();
  const [qtdDomingoManha, setQtdDomingoManha] = useState();
  const [qtdDomingoNoite, setQtdDomingoNoite] = useState();
  const [nomeLimpar, setNomeLimpar] = useState(true);
  const [sobrenomeLimpar, setSobrenomeLimpar] = useState(true);
  const [redeLimpar, setRedeLimpar] = useState(true);
  const [criancasLimpar, setCriancasLimpar] = useState(true);
  const [listagem, setListagem] = useState();
  var qtdMAxima = 75;
  useEffect(() => {
    setLoading(true);
    Axios.get(url).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    if (data) {
      const cultoSabado = Object.keys(data).filter((pessoa) => {
        return data[pessoa].culto == "sabado";
      });
      setQtdSabado(cultoSabado.length);
      const cultoDomingoManha = Object.keys(data).filter((pessoa) => {
        return data[pessoa].culto == "manha";
      });
      setQtdDomingoManha(cultoDomingoManha.length);
      const cultoDomingoNoite = Object.keys(data).filter((pessoa) => {
        return data[pessoa].culto == "noite";
      });
      setQtdDomingoNoite(cultoDomingoNoite.length);
      setListagem(data);
      // ATENÇÃO USE ESSE CÓDIGO COM CAUTELA, REMOVE TUDO //
      // if (dia_sem >= 1 && dia_sem <= 5) {
      //   Object.entries(data).map((individuo) => {
      //     if (individuo[0] != "base") {
      //       doRemove(individuo[0]);
      //     }
      //   });
      // }
    }
  }, [data]);
  const doRemove = (id) => {
    remove(`https://aguaviva-rp.firebaseio.com/teste/${id}.json`);
  };
  const remove = (url) => {
    Axios.delete(url).then(() => {
      console.log(`você deletou ${url}`);
    });
  };
  var redirect;
  if (typeof window !== "undefined") {
    redirect = window.location.href;
  }
  const post = (data) => {
    Axios.post(url, data).then((res) => {
      setNomeLimpar(!nomeLimpar);
      setSobrenomeLimpar(!sobrenomeLimpar);
      setRedeLimpar(!redeLimpar);
      setCriancasLimpar(!criancasLimpar);
      alert("você confirmou sua presença no culto");
      window.location = "/listagem.html";
    });
  };

  const salve = () => {
    if (nome && sobrenome && rede && culto) {
      const existeCriancas = criancas ? criancas : "0";
      post({
        nome: nome.toLowerCase(),
        sobrenome: sobrenome,
        rede: rede,
        culto: culto,
        criancas: existeCriancas,
        chegada: false,
      });
    } else {
      alert("Um ou mais campos estão em branco");
    }
  };



  // null | "" | undefined | false
const existe = true


// 1 se eu colocar minha variavel com um valor que existe meu select vai exibir os cultos de sabados
//quando nao atender ela vai exibir cultos de terça feira

// 2 criar uma segunda variavel que se for igual a "Ativo" exiba o botao inscrever

  return (
    <>
      {/* {existe && <>teste</>} 
      {existe ? <>teste</> : <>teste2</>} */}
      <Head>
        <title>Igreja Batista Água Viva - Ribeirão Pires</title>
      </Head>
      {existe && (
      <div className="container">
        <div className="header">
          <img src="/images/logo.jpg" />
          <h1>Formulário para culto dos jovens (24/04)</h1>
        </div>

        {/* {(qtdSabado < qtdMAxima || */}
        {(qtdDomingoManha < qtdMAxima || qtdDomingoNoite < qtdMAxima) && (
          // <>
          //   {(dia_sem == 0 || dia_sem == 5 || dia_sem == 6) && (
              <>
                {listagem ? (
                  <div className="form">
                    <label>Nome</label>
                    {nomeLimpar && (
                      <input
                        onKeyUp={(e) => setNome(e.currentTarget.value)}
                        type="text"
                        placeholder="Nome "
                        className="input_name"
                        required
                      />
                    )}
                    {!nomeLimpar && (
                      <input
                        onKeyUp={(e) => setNome(e.currentTarget.value)}
                        type="text"
                        placeholder="Nome "
                        className="input_name"
                        required
                      />
                    )}

                    <br></br>
                    <label>Sobrenome</label>
                    {sobrenomeLimpar && (
                      <input
                        onKeyUp={(e) => setSobrenome(e.currentTarget.value)}
                        type="text"
                        placeholder="Sobrenome"
                        required
                      />
                    )}
                    {!sobrenomeLimpar && (
                      <input
                        onKeyUp={(e) => setSobrenome(e.currentTarget.value)}
                        type="text"
                        placeholder="Sobrenome"
                        required
                      />
                    )}
                    <br></br>
                    <label>Discipulado</label>
                    {redeLimpar && (
                      <select
                        onChange={(e) => {
                          setRede(e.target.value);
                        }}
                        required
                      >
                        <option value="">Selecione seu discipulado</option>
                        <option value="isabela">Isabela Amaro</option>
                        <option value="matheus">Matheus Amaro</option>
                        <option value="felipe">Felipe Ramos</option>
                        <option value="silas">
                          Silas Souza
                        </option>
                        <option value="elaine">Elaine Jeremias </option>
                      </select>
                    )}
                    {!redeLimpar && (
                      <select
                        onChange={(e) => {
                          setRede(e.target.value);
                        }}
                        required
                      >
                        <option value="">Selecione seu discipulado</option>
                        <option value="isabela">Isabela Amaro</option>
                        <option value="matheus">Matheus Amaro</option>
                        <option value="felipe">Felipe Ramos</option>
                        <option value="silas">
                          Silas Souza
                        </option>
                        <option value="elaine">Elaine Jeremias </option>
                      </select>
                    )}
                    <br></br>
                    <label>Qual culto deseja ir?</label>
                    <select
                      onChange={(e) => {
                        setCulto(e.target.value);
                      }}
                      required
                    >
                      <option value="">Selecione o culto</option>
                      {/* {qtdSabado < qtdMAxima && (
                        <option value="sabado">Sábado - 19hs</option>
                      )} */}
                      {qtdDomingoManha < qtdMAxima && (
                        <option value="manha">Sábado - 15hs</option>
                      )}
                      {qtdDomingoNoite < qtdMAxima && (
                        <option value="noite">Sábado - 17:30hs </option>
                      )}
                    </select>
                    {/* <br></br>
                    <label>Quantas crianças vai levar para o cultinho?</label> */}
                    {/* {criancasLimpar && (
                      <input
                        onKeyUp={(e) => setCriancas(e.currentTarget.value)}
                        type="number"
                        placeholder="Numero de crianças"
                        required
                      />
                    )}
                    {!criancasLimpar && (
                      <input
                        onKeyUp={(e) => setCriancas(e.currentTarget.value)}
                        type="number"
                        placeholder="Numero de crianças"
                        required
                      />
                    )} */}
                    <div className="vagas">
                      {/* <span>
                        Sábado 19hs -
                        {qtdSabado >= qtdMAxima && (
                          <small className="red"> vagas encerradas</small>
                        )}
                        {qtdSabado < qtdMAxima && (
                          <>
                            {qtdSabado >= 0 && (
                              <> resta{qtdSabado != qtdMAxima - 1 && <>m</>}</>
                            )}
                            {qtdSabado >= 0 && (
                              <small> {qtdMAxima - qtdSabado}</small>
                            )}
                            {qtdSabado >= 0 && (
                              <> vaga{qtdSabado != qtdMAxima - 1 && <>s</>}</>
                            )}
                          </>
                        )}
                      </span> */}
                      <span>
                        Sábado 15:00hs -
                        {qtdDomingoManha >= qtdMAxima && (
                          <small className="red"> vagas encerradas</small>
                        )}
                        {qtdDomingoManha < qtdMAxima && (
                          <>
                            {qtdDomingoManha >= 0 && (
                              <>
                                {" "}
                                resta
                                {qtdDomingoManha != qtdMAxima - 1 && <>m</>}
                              </>
                            )}
                            {qtdDomingoManha >= 0 && (
                              <small> {qtdMAxima - qtdDomingoManha}</small>
                            )}
                            {qtdDomingoManha >= 0 && (
                              <>
                                {" "}
                                vaga{qtdDomingoManha != qtdMAxima - 1 && <>s</>}
                              </>
                            )}
                          </>
                        )}
                      </span>
                      <span>
                        Sábado 17:30hs -
                        {qtdDomingoNoite >= qtdMAxima && (
                          <small className="red"> vagas encerradas</small>
                        )}
                        {qtdDomingoNoite < qtdMAxima && (
                          <>
                            {qtdDomingoNoite >= 0 && (
                              <>
                                {" "}
                                resta
                                {qtdDomingoNoite != qtdMAxima - 1 && <>m</>}
                              </>
                            )}
                            {qtdDomingoNoite >= 0 && (
                              <small> {qtdMAxima - qtdDomingoNoite}</small>
                            )}
                            {qtdDomingoNoite >= 0 && (
                              <>
                                {" "}
                                vaga{qtdDomingoNoite != qtdMAxima - 1 && <>s</>}
                              </>
                            )}
                          </>
                        )}
                      </span>
                    </div>

                    <br></br>
                    <button onClick={salve}>Inscrever</button>
                    <a href="/listagem.html" className="listagem">
                      Verifique a listagem
                    </a>
                  </div>
                ) : (
                  <p className="carregando">
                    <img src="/images/loading.gif" />
                    <span>Carregando...</span>
                  </p>
                )}
              </>
          //   )}
          // </>
        )}

        {/* {qtdSabado >= qtdMAxima && */}
        {qtdDomingoManha >= qtdMAxima &&
          qtdDomingoNoite >= qtdMAxima &&
          dia_sem != 1 &&
          dia_sem != 2 &&
          dia_sem != 3 &&
          dia_sem != 4 && (
            <div>
              <p className="paragrafo">
                Infelizmente todos os cultos presenciais ja esgotaram sua
                capacidade exigida por lei, mas acompanhe online pelas nossas
                redes sociais
                <div className="redes">
                  <a href="https://www.youtube.com/channel/UCSgeLNbDf68linYZ7XBzuug/videos">
                    <img src="/images/youtube.svg" className="icon" />
                  </a>
                  <a href="https://www.facebook.com/IbavRibeiraoPires/">
                    <img src="/images/facebook.svg" className="icon" />
                  </a>
                  <a href="https://www.instagram.com/ibavrp/">
                    <img src="/images/instagram.svg" className="icon" />
                  </a>
                </div>
                <a href="/listagem.html" className="listagem_encerrada">
                  Verifique a listagem dos cultos presenciais
                </a>
              </p>
            </div>
          )}
        {/* {dia_sem >= 1 && dia_sem <= 4 && (
          <div>
            <p className="paragrafo">
              O site só abrirá as inscrições <b>sexta-feira as 00hs</b>
              Enquanto espera nos acompanhe nas nossas redes sociais{" "}
              <div className="redes">
                <a href="https://www.youtube.com/channel/UCSgeLNbDf68linYZ7XBzuug/videos">
                  <img src="/images/youtube.svg" className="icon" />
                </a>
                <a href="https://www.facebook.com/IbavRibeiraoPires/">
                  <img src="/images/facebook.svg" className="icon" />
                </a>
                <a href="https://www.instagram.com/ibavrp/">
                  <img src="/images/instagram.svg" className="icon" />
                </a>
              </div>
            </p>
          </div>
        )} */}
      </div>
    )}
    </>
  );
}

export default Page;
