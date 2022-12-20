import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalcComum from './pages/CalcComum';
import CalcRomano from './pages/CalcRomano';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <CalcComum /> } />
      <Route exact path="/calcComum" element={ <CalcComum /> }/>
      <Route exact path="/calcRom" element={ <CalcRomano /> } />
      <Route exact path="/login" element={ <Login /> } />
    </Routes>

    
  );
}

export default App;
