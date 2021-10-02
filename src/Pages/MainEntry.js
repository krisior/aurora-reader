
import React, { useState } from 'react';

import styled, { ThemeProvider } from 'styled-components';

import '../Pages/MainEntry.css';
import { useDarkMode } from '../Styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../Styles/globalStyles'

import BgParticles from '../Components/BgParticles/BgParticles';
import LoginRegister from '../Components/LoginRegisterForm/LoginRegisterForm';
import WelcomeContainer from '../Components/WelcomeContainer/WelcomeContainer';
import { Navbar, NavItem, DropdownMenu1, DarkModeToggle } from '../Components/Navbar/Navbar';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faAdjust } from '@fortawesome/free-solid-svg-icons'



function MainEntry() {
  
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={ themeMode }>
      <div className="MainEntry">
        <GlobalStyles /> {/* themes */} 

        <BgParticles /> {/* already set as background */}        

        <Navbar> {/* ltr */ }
          
          <DarkModeToggle theme={theme} toggleTheme={toggleTheme}/>
          <NavItem icon={<FontAwesomeIcon icon={faEllipsisV} />}>
            <DropdownMenu1 />
          </NavItem>
        </Navbar>

        <WelcomeContainer />

        <LoginRegister />
      </div>
    </ThemeProvider>
  );
}



export default MainEntry;
