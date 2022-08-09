
import './App.css';
import {teste} from './utils'
import {Click} from './utils'
function App() {
  

  return (
    <div className="App">
      <form>
        <input onChange={(e)=>{teste(e.target.value)}}/>
        <button onClick={()=>{Click()}}>Mensagem</button>
      </form>
    </div>
  );
}

export default App;
