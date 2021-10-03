import React from 'react';
import ReactDOM from 'react-dom';

import MainEntry from './Pages/MainEntry';
import LoginEntry from './Pages/Login';
import RegisterEntry from './Pages/Register'


ReactDOM.render(
  <React.StrictMode>
    <MainEntry />
  </React.StrictMode>,
  document.getElementById('root')
);

