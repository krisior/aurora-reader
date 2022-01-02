import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';

import './BasicInfo.css';
import { useDarkMode } from '../Styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../Styles/globalStyles';

import BgParticles from '../Components/BgParticles/BgParticles';

import { Navbar, NavItem, DropdownMenuMain, /*DropdownMenuProfile*/ DarkModeToggle, DropdownMenuEBOOK } from '../Components/Navbar/Navbar';
import { DashboardLayout } from '../Components/Dashboard/DashboardLayout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { BookLayout } from '../Components/Book/BookLayout';

function Book(props) {
      const [ theme, toggleTheme ] = useDarkMode();
      const themeMode = theme === 'light' ? lightTheme : darkTheme;
    
      const name = "Krzysiuu";

  return (
    <ThemeProvider theme={ themeMode }>
        <div className="MainEntry">
          <GlobalStyles /> {/* themes */} 

          <BgParticles /> {/* already set as background */}        

          <Navbar> {/* ltr */ }
            <span className="navbar-name">hello <span style={{color: "rgb(52, 152, 219)"}}>{name}</span></span>
            {/* << You can do whatever you want with this btn, just keep the onClick the same */}

            <DarkModeToggle theme={ theme } toggleTheme={ toggleTheme }/>

            <NavItem icon={<FontAwesomeIcon icon={ faEllipsisV } />} >
              <DropdownMenuEBOOK {...props}/>
            </NavItem>

          </Navbar>

            <BookLayout />
      </div>
    </ThemeProvider>
  );
}

export default Book;
