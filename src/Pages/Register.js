import React from 'react';

import { ThemeProvider } from 'styled-components';

import './BasicInfo.css';
import { useDarkMode } from '../Styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../Styles/globalStyles'

import BgParticles from '../Components/BgParticles/BgParticles';
import { RegisterForm } from '../Components/LoginRegisterForm/RegisterForm';

import { Navbar, /*NavItem, DropdownMenu1,*/ DarkModeToggle } from '../Components/Navbar/Navbar';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

function RegisterEntry(props) {
  
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={ themeMode }>

      <div className="LoginEntry">
            <GlobalStyles /> {/* themes */} 

            <BgParticles /> {/* already set as background */}  

            <Navbar> {/* ltr */ }
          
            <DarkModeToggle theme={theme} toggleTheme={toggleTheme}/>

            <RegisterForm {...props} />

            </Navbar>
      </div>

    </ThemeProvider>
  );
}

export default RegisterEntry;
