import React from 'react';

import { ThemeProvider } from 'styled-components';

import './BasicInfo.css';
import { useDarkMode } from '../Styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../Styles/globalStyles'

import BgParticles from '../Components/BgParticles/BgParticles';
import LoginRegister from '../Components/LoginRegisterForm/LoginRegisterForm';
import WelcomeContainer from '../Components/WelcomeContainer/WelcomeContainer';
import { Navbar, NavItem, DropdownMenuIntro, DarkModeToggle } from '../Components/Navbar/Navbar';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

function Main() {
  
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={ themeMode }>
      <div className="MainEntry">
        <GlobalStyles /> {/* themes */} 

        <BgParticles /> {/* already set as background */}        

        
        <Navbar> {/* ltr */}
          
          <DarkModeToggle theme={ theme } toggleTheme={ toggleTheme }/>
          <NavItem icon={<FontAwesomeIcon icon={ faEllipsisV } />}>
            <DropdownMenuIntro />
          </NavItem>
        </Navbar>

        <WelcomeContainer />

        <LoginRegister />
      
        
      </div>
    </ThemeProvider>
  );
}



export default Main;
