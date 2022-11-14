import React from 'react';
import { Routes, Route } from 'react-router-dom';
import calcComum from './pages/calcComum';
import calcRomano from './pages/calcRomano';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ Login } />
      <Route exact path="/calcComum" element={ calcComum }/>
      <Route exact path="/calcRom" element={ calcRomano } />
    </Routes>

    
  );
}

export default App;
