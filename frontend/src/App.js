import React from 'react';
import './App.css';

import Routes from './routes';

import './pages/Login/styles.css';

import logoTri from './assets/logos/tri.png';
import logoFomtec from './assets/logos/fomtec.png';


function App() {
  return (
    <div className="container">
      <div className="content">
        <Routes />
      </div>

      <div className="footer">
        <img src={logoFomtec} alt="FOMTEC Soluções Elétricas"></img>
        <img src={logoTri} id="logo-tri" alt="Power by: TRI"></img>
      </div>
    </div>
  );
}

export default App;
