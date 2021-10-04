
import react, { useState } from 'react';

import styled, { ThemeProvider } from 'styled-components';

import './BasicInfo.css';
import { useDarkMode } from '../Styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../Styles/globalStyles';

import BgParticles from '../Components/BgParticles/BgParticles';

import { Navbar, NavItem, DropdownMenuMain, DropdownMenuProfile, DarkModeToggle } from '../Components/Navbar/Navbar';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


function MainPage() {
  
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={ themeMode }>
        <div className="MainEntry">
          <GlobalStyles /> {/* themes */} 

          <BgParticles /> {/* already set as background */}        

          <Navbar> {/* ltr */ }

            <DarkModeToggle theme={ theme } toggleTheme={ toggleTheme }/>
            <NavItem icon={<FontAwesomeIcon icon={ faEllipsisV } />}>
              <DropdownMenuMain />
            </NavItem>
          </Navbar>

      </div>
    </ThemeProvider>
  );
}



export default MainPage;
