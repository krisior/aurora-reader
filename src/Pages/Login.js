import React from 'react';

import { ThemeProvider } from 'styled-components';

import './BasicInfo.css';
import { useDarkMode } from '../Styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../Styles/globalStyles'

import BgParticles from '../Components/BgParticles/BgParticles';
import LoginForm from '../Components/LoginRegisterForm/LoginForm';

import { Navbar,DarkModeToggle } from '../Components/Navbar/Navbar';


function Login(props) {
  
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={ themeMode }>

      <div className="LoginEntry">
            <GlobalStyles /> {/* themes */} 

            <BgParticles /> {/* already set as background */}
            
            <Navbar> {/* ltr */ }
            
              <DarkModeToggle theme={theme} toggleTheme={toggleTheme}/>

              <LoginForm {...props}/>

            </Navbar>
      </div>

    </ThemeProvider>
  );
}



export default Login;
