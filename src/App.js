
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const Brasil = {
    time: 'Brasil',
    jogadores: [
      { jogador: 'Alisson' },
      { jogador: 'Thiago Silva' },
      { jogador: 'Marquinhos' },
      { jogador: 'Daniel alves' },
      { jogador: 'MIlitão' },
      { jogador: 'Danilo' },
      { jogador: 'Casemiro' },
      { jogador: 'coutinho' },
      { jogador: 'Paqueta' },
      { jogador: 'Richarlison' },
      { jogador: 'neymar' }
    ]
  }
  const saoPaulo = {
    time: 'São Paulo',
    jogadores: [
      { jogador: 'Felipe (pega penalti) Alves' },
      { jogador: 'Leo (Ruim)' },
      { jogador: 'Miranda (xerife)' },
      { jogador: 'Diego (brabo) costa' },
      { jogador: 'Igor Vinicius' },
      { jogador: 'Reinaldo (carrasco da galinhada)' },
      { jogador: 'Igor (horrivel) gomes' },
      { jogador: 'Gabi (monstro) neves' },
      { jogador: 'Patrick(opa te dei um rolinho)' },
      { jogador: 'Calleri(OOOOOOooooOOOO toca no calleri que é gol)' },
      { jogador: 'Luciano(que foi? quer tomar gol?)' }
    ]
  }
  const corinthians = {
    time: 'Corinthians',
    jogadores: [
      { jogador: 'Cassio' },
      { jogador: 'Fabio Santos' },
      { jogador: 'Fagner' },
      { jogador: 'Gil' },
      { jogador: 'Renan' },
      { jogador: 'Roni' },
      { jogador: 'Giuliano' },
      { jogador: 'Xavier' },
      { jogador: 'Du queiroz' },
      { jogador: 'Adson' },
      { jogador: 'Felipe' }
    ]
  }

  const Palmeiras = {
    time: 'Corinthians',
    jogadores: [
      { jogador: 'Weverton' },
      { jogador: 'Marcos rocha' },
      { jogador: 'Gustavo gomez' },
      { jogador: 'Murilo' },
      { jogador: 'Piquerez' },
      { jogador: 'Danilo' },
      { jogador: 'Zé Rafael' },
      { jogador: 'Raphael veiga' },
      { jogador: 'Dudu' },
      { jogador: 'Scarpa' },
      { jogador: 'Rony' }
    ]
  }

  const nomes = {
    n1:[
      {nome:'fernando'},
      {nome:'fernanda'},
      {nome:'Vini'},
      {nome:'joao'},
      {nome:'Carlos'},
      {nome:'Silvana'},
      {nome:'Vitoria'},
      {nome:'marcos'},
      {nome:'rogerio'},
      {nome:'jukera'},
      
    ],
    n2:[
      {nome:'Amis'},
      {nome:'Bentley'},
      {nome:'Dalibor'},
      {nome:'Arthur'},
      {nome:'Bjorn'},
      {nome:'Hakon'},
      {nome:'Dragomir'},
      {nome:'Frederico'},
      {nome:'Enguerrand'},
      {nome:'Ethelstan'},
    ],
    n3:[
      {nome:'ゆみ'},
      {nome:'あゆみ'},
      {nome:'まゆみ'},
      {nome:'さゆリ'},
      {nome:'さを理'},
      {nome:'あけみ'},
      {nome:'はるみ'},
      {nome:'ゆリ'},
      {nome:'かおリ'},
      {nome:'はな'},
    ]
  }

  const [mudar,setMudar] = useState (0)
  const [nome,setNome] = useState(nomes.n1)

  const [trocarTime,setTrocarTime] = useState(0)
  const [Time,setTime] = useState(Brasil.time)
  const [jogadores,setJogadores] = useState(Brasil.jogadores)

  useEffect(()=>{
    if(trocarTime === 1){
      setTime(saoPaulo.time)
      setJogadores(saoPaulo.jogadores)
    }
    else if(trocarTime === 2){
      setTime(corinthians.time)
      setJogadores(corinthians.jogadores)
    }
    else if(trocarTime === 3){
      setTime(Palmeiras.time)
      setJogadores(Palmeiras.jogadores)
    }
  },[trocarTime])

  useEffect(() =>{
    if(mudar === 1){
      setNome(nomes.n2)
    }
    else if(mudar === 2){
      setNome(nomes.n3)
    }
  },[mudar])


  return (
    <div className="App">
      <div>
      <h1>{Time}</h1>
      {jogadores.map(jogadores =>
      (<p>{jogadores.jogador}</p>)
      )}
      <button onClick={()=>{setTrocarTime(1)}}>São Paulo</button>
      <button onClick={()=>{setTrocarTime(2)}}>Corinthians</button>
      <button onClick={()=>{setTrocarTime(3)}}>Palmeiras</button>
      </div>

      <div>
          <h1>Nomes</h1>
          {nome.map(nomes =>
            (<p>{nomes.nome}</p>)
          )}
          <button onClick={() =>{setMudar(mudar + 1)}}>Mudar</button>
      </div>

    </div>
  );
}

export default App;
