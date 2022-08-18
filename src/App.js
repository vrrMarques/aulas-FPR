
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [resposta, setResposta] = useState();

  //fetch('https://teste-aula-metodos-ad558-default-rtdb.firebaseio.com/jogos.json')
  //  .then(res => res.json())
  //  .then(data => setResposta(data))

  useEffect(() => {
    axios.get('https://teste-aula-metodos-ad558-default-rtdb.firebaseio.com/jogos.json')
      .then(function (response) {
        //console.log(response)
        setResposta(response.data);
      })

  }, [])



  return (
    <>
      header<br />
      {resposta &&
        Object.values(resposta?.apex).map(jogo => {
          console.log(resposta)
          return (
            <div>
              <h2>apex</h2>
              <p>{jogo.tipo}</p>
              <p>{jogo.idade}</p>
              <p>{jogo.empresa}</p>
            </div>
          )
        })
      }
      {resposta &&
        Object.values(resposta?.lol).map(jogo => {
          return (
            <div>
              <h2>lol</h2>
              <p>{jogo.tipo}</p>
              <p>{jogo.idade}</p>
              <p>{jogo.empresa}</p>
            </div>
          )
        })
      }
      {resposta &&
        Object.values(resposta?.wow).map(jogo => {
          return (
            <div>
              <h2>wow</h2>
              <p>{jogo.tipo}</p>
              <p>{jogo.idade}</p>
              <p>{jogo.empresa}</p>
            </div>
          )
        })
      }
      {resposta &&
        Object.values(resposta?.valorant).map(jogo => {
          return (
            <div>
              <h2>valorant</h2>
              <p>{jogo.tipo}</p>
              <p>{jogo.idade}</p>
              <p>{jogo.empresa}</p>
            </div>
          )
        })
      }
    </>
  );
}

export default App;