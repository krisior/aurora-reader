
import React from 'react';

import './App.css';

import Header from './Components/Header/Header';
import BgParticles from './Components/BgParticles/BgParticles';
import LoginRegister from './Components/LoginRegisterForm/LoginRegisterForm';

import logo_1 from './logo.png'; 

function App() {
  return (
    <div className="App">
      
      <BgParticles/> {/*already set as background*/}
      <Header />

      
        
      <LoginRegister />
    </div>
  );
}

export default App;
