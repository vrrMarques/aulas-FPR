
import { React } from 'react';
import './App.css';

function App() {
  const funcionario = [
    {
      nome: 'Vitoria',
      idade: 16,
      dtNasc: '25/06/2006',
      mae: 'Marta',
      Pai: 'Jair'
        
    },
    {
      nome: 'joao',
      idade: 22,
      dtNasc: '15/06/2000',
      mae: 'Silvana',
      Pai: 'Marcos'
        },
    
    {
        nome: 'Mariazinha',
        idade: 18,
        dtNasc: '12/02/2004',
        mae: 'Darlene',
        Pai: 'fernando'
        },
        {
          nome: 'Thiago',
          idade: 21,
          dtNasc: '13/05/2001',
          mae: 'Maria',
          Pai: ''
          },
          {
            nome: 'Fernando',
            idade: 19,
            dtNasc: '13/10/2003',
            mae: 'Lucia',
            Pai: ''
            }
    
]
  return (
    <div className="App">
      {funcionario.map(item => {
        return(
          <>
          <div>nome: {item.nome}</div>
          <div>idade: {item.idade}</div>
          <div>data de nascimento: {item.dtNasc}</div>
          <div>nome da mãe: {item.mae}</div>
          {item.Pai && <div>nome do pai: {item.Pai}</div>}<br />
          </>
        )
      })}
    </div>
  );
}

export default App;
