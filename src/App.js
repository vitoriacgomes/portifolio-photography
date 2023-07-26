import React, { useState } from 'react';
import './App.css';
import './pages/menu/index'
import Menu from './pages/menu/index';
import Home from './pages/home';
import Pessoas from './pages/pages/pessoas';
import Lugares from './pages/pages/lugares';
import Sobre from './pages/pages/sobre';
import Contato from './pages/pages/contato';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function goToHome() {
    setCurrentPage('home');
  }
  function goToPessoas() {
    setCurrentPage('pessoas');
  } 
  function goToLugares() {
    setCurrentPage('lugares');
  } 
  function goToSobre() {
    setCurrentPage('sobre');
  } 
  function goToContato() {
    setCurrentPage('contato');
  } 

  return (
    <div className="App">
      <Menu
        onHomeButtonClick={goToHome}
        onPessoasButtonClick={goToPessoas}
        onLugaresButtonClick={goToLugares}
        onSobreButtonClick={goToSobre}
        onContatoButtonClick={goToContato}
      />
      {currentPage === 'home' && <Home 
        onPessoasButtonClick={goToPessoas} 
        onLugaresButtonClick={goToLugares}
        onSobreButtonClick={goToSobre} 
        onContatoButtonClick={goToContato} /> }
      {currentPage === 'pessoas' && <Pessoas />}
      {currentPage === 'lugares' && <Lugares />}
      {currentPage === 'sobre' && <Sobre />}
      {currentPage === 'contato' && <Contato />}
    </div>
  );
}

export default App;
