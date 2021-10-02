
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import '../Pages/MainEntry.css';

import BgParticles from '../Components/BgParticles/BgParticles';
import LoginRegister from '../Components/LoginRegisterForm/LoginRegisterForm';
import WelcomeContainer from '../Components/WelcomeContainer/WelcomeContainer';
import { Navbar, NavItem, DropdownMenu1 } from '../Components/Navbar/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faAdjust} from '@fortawesome/free-solid-svg-icons'


function MainEntry() {
  return (
    <div className="MainEntry">
      
      <BgParticles backgroundColor={true}/>{/*already set as background*/}

      {/*<Header />*/}

      <Navbar> {/* ltr */ }
        
        <NavItem icon={<FontAwesomeIcon icon={faAdjust} />} />
        <NavItem icon={<FontAwesomeIcon icon={faEllipsisV} />}>
          <DropdownMenu1 />
        </NavItem>
      </Navbar>

      <WelcomeContainer />

      <LoginRegister />
    </div>
  );
}



export default MainEntry;
