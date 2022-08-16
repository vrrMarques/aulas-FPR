
import { React } from 'react';
import './App.css';
import  {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';


function App() {

 

  return (
    <div>
   <Router>
     <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/split?cor=vermelho&time=saoPaulo&comida=peixe">Split</Link></li>
        <li><Link to="/query?nome=Vinicius&jogo=valorant&carro=audi&doce=torta&esporte=basquete">Query-string</Link></li>
     </ul>
     <Routes>
        <Route path='/' element={<Page1/>} />
        <Route path='/split' element={<Page2/>} />
        <Route path='/query' element={<Page3/>} />
     </Routes>
   </Router>


   </div>
  );
}

export default App;
