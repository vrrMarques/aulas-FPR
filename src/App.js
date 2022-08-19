
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [resposta, setResposta] = useState()
  const [tipo, setTipo] = useState()
  const [valor, setValor] = useState()
  const [mapeamento, setMapeamento] = useState()
  const [novoDado, setNovoDado] = useState()

  useEffect(() => {
    axios.get('https://imperial-vector-338222-default-rtdb.firebaseio.com/Frutas.json')
      .then(function (response) {
        //console.log(response)
        setResposta(response.data);
      })

  }, [mapeamento])


  const cadastro = () => {
    axios.post('https://imperial-vector-338222-default-rtdb.firebaseio.com/Frutas/laranja.json', {
      tipo: tipo,
      valor: valor
    })
      .then(function (response) {
        //console.log(response)
        alert('tipo de fruta cadastrada')
        setMapeamento(!mapeamento)
      }).catch(function () {
        alert('tipo de fruta nao cadastrada')
      })
  }


  const deletar = (id) => {
    axios.delete(`https://imperial-vector-338222-default-rtdb.firebaseio.com/Frutas/laranja/${id}.json`, {})
      .then(function (response) {
        //console.log(response)
        alert('sua fruta foi excluida')
        setMapeamento(!mapeamento)
      }).catch(function () {
        alert('tipo de fruta nao excluida')
      })
  }

  const editar = (id) => {
    axios.patch(`https://imperial-vector-338222-default-rtdb.firebaseio.com/Frutas/laranja/${id}.json`, { tipo: novoDado })
      .then(function (response) {
        //console.log(response)
        alert('sua fruta foi ediatada')
        setMapeamento(!mapeamento)
      }).catch(function () {
        alert(' tipo de fruta nao editada')
      })
  }



  return (
    <>
      <h3>Laranja</h3>
      {resposta &&
        Object.entries(resposta?.laranja).map(fruta => {
          return (
            <div>
              <>
                <input onChange={(e) => { setNovoDado(e.target.value) }} />
                {fruta[1].tipo} <button onClick={() => deletar(fruta[0])}>Excluir</button>
                <button onClick={() => editar(fruta[0])}>Editar</button> <br />
              </>
            </div>
          )
        })
        //PARA EDITAR OUTRAS FRUTAS: DESCOMENTAR E ALTERAR URL
      }

      {/* <h3>banana</h3>
      {resposta &&
        Object.entries(resposta?.Banana).map(fruta => {
          return (
            <div>
              <>
                <input onChange={(e) => { setNovoDado(e.target.value) }} />
                {fruta[1].tipo} <button onClick={() => deletar(fruta[0])}>Excluir</button>
                <button onClick={() => editar(fruta[0])}>Editar</button> <br />
              </>
            </div>
          )
        })
      }
      <h3>Maça</h3>
      {resposta &&
        Object.entries(resposta?.maça).map(fruta => {
          return (
            <div>
              <>
                <input onChange={(e) => { setNovoDado(e.target.value) }} />
                {fruta[1].tipo} <button onClick={() => deletar(fruta[0])}>Excluir</button>
                <button onClick={() => editar(fruta[0])}>Editar</button> <br />
              </>
            </div>
          )
        })
      } */}

      <h2>Cadastrar novo tipo de fruta</h2>
      <form>
        <input placeholder='tipo' onChange={(e) => setTipo(e.target.value)} /> <br />
        <input placeholder='valor' onChange={(e) => setValor(e.target.value)} /> <br />
        <button onClick={(e) => {
          e.preventDefault()
          cadastro()
        }}>Cadastrar</button>
      </form>
    </>
  );
}

export default App;