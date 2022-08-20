
import { React } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page2 from './components/localstorage';
import Login from './components/Login';
import Session from './components/Session';

//route
function App() {

  return (
    <div>
      
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/empresa' element={<Page2 />} />
          <Route path='/session' element={<Session />} />

        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
