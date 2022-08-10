
import './App.css';
import {Teste} from './utils'
import {Click} from './utils'
function App() {
  

  return (
    <div className="App">
      <form>
        <input onChange={(e)=>{Teste(e.target.value)}} placeholder='instrumento'/>
        <input onChange={(e)=>{Click(e.target.value)}}placeholder='Campeão do lol'/>
       
      </form>
    </div>
  );
}

export default App;
