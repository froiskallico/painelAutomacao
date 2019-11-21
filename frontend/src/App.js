import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Routes from './routes';

import './pages/Login/styles.css';

import logoTri from './assets/logos/tri.png';
import logoFomtec from './assets/logos/fomtec.png';
import datateck from './assets/logos/datateck.png';

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src={datateck} alt="Datateck"></img>
      </div>

      <div className="content">
        <Routes />
      </div>

      <div className="footer">
        <img src={logoFomtec} alt="FOMTEC Soluções Elétricas"></img>
        <img src={logoTri} id="logo-tri" alt="Power by: TRI"></img>
      </div>

      <ToastContainer />

    </div>
  );
}

export default App;
