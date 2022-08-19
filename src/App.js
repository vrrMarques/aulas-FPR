
import { React, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';

//route
function App() {

  const [usuario, setUsuario] = useState()
  const entrar = () => {
    localStorage.setItem('usuario', usuario)
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/empresa' element={<Page2 />} />
          <Route path='/contato' element={<Page3 />} />
        </Routes>
      </Router>

      <input placeholder='login' onChange={(e) => setUsuario(e.target.value)} /><br />
      <input placeholder='senha' type='password' /><br />
      <button onClick={() => entrar()}>Entrar</button>
    </div>
  );
}

export default App;
