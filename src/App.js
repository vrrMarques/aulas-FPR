
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
        <li><Link to="/empresa">empresa</Link></li>
        <li><Link to="/contato">contato</Link></li>
     </ul>
     <Routes>
        <Route path='/' element={<Page1/>} />
        <Route path='/empresa' element={<Page2/>} />
        <Route path='/contato' element={<Page3/>} />
     </Routes>
   </Router>
   </div>
  );
}

export default App;
