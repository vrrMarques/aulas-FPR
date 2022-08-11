
import { useState } from 'react';
import './App.css';

function App() {
  const [teste, setTeste] = useState('Vinicius')
  const [teste2, setTeste2] = useState('abacaxi')
  const [n,setN] = useState(1)

  const funcao = () =>{
    if(teste === 'Vinicius' && teste2 ==='abacaxi'){
      setTeste('Joao')
      setTeste2('morango')
    }
  }

  const reverte = () =>{
    if(teste === 'Joao' && teste2 ==='morango'){
      setTeste('Vinicius')
      setTeste2('abacaxi')
    }
  }
  
  return (
    <div className="App">
      <>
      <p>{`Meu nome é ${teste} e eu gosto de ${teste2}`}</p>
      <button onClick={()=>{funcao() || reverte()}}>trocar</button> <br/>
      {n} <br/>
      <button onClick={()=> setN(n*4)}>Acrescente</button>
      </>
    </div>
  );
}

export default App;
