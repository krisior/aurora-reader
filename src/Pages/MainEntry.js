
import React, { useState } from 'react';

import '../Pages/MainEntry.css';

import BgParticles from '../Components/BgParticles/BgParticles';
import Header from '../Components/Header/Header';
import LoginRegister from '../Components/LoginRegisterForm/LoginRegisterForm';
import WelcomeContainer from '../Components/WelcomeContainer/WelcomeContainer';
import { Navbar, NavItem, DropdownMenu } from '../Components/Navbar/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faAdjust} from '@fortawesome/free-solid-svg-icons'


function MainEntry() {
  return (
    <div className="MainEntry">
      
      <BgParticles/> {/*already set as background*/}

      {/*<Header />*/}

      <Navbar> {/* ltr */ }
        <NavItem icon={<FontAwesomeIcon icon={faAdjust} />} />
        <NavItem icon={<FontAwesomeIcon icon={faEllipsisV} />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>

      <WelcomeContainer />

      <LoginRegister />
    </div>
  );
}



export default MainEntry;
