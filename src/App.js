import React from 'react';

import Header from './Components/Header/Header';
import BgParticles from './Components/BgParticles/BgParticles';

function App() {
  return (
    <div className="App">
      <BgParticles/> {/*DO NOT TOUCH THIS ONE, IT'S ALREADY SET AS BACKGROUND*/}
      
      <Header />
    </div>
  );
}

export default App;
