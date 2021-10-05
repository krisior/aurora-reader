import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';

import './BasicInfo.css';
import { useDarkMode } from '../Styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../Styles/globalStyles';

import BgParticles from '../Components/BgParticles/BgParticles';

import { Navbar, NavItem, DropdownMenuMain, /*DropdownMenuProfile*/ DarkModeToggle } from '../Components/Navbar/Navbar';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


function Dashboard(props) {
  /*
  const [name, setName] = useState("");

    async function getName(){
        try {
            const response = await fetch('http://localhost:4000/dashboard',{
                method: "GET",
                headers:{token : localStorage.token}
            });


            const parseRes = await response.json();

            setName(parseRes.user_name);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(()=>{
        getName()
    },[]);

    
    const logout = (e) =>{
        e.preventDefault();

        localStorage.removeItem("token");
        props.setAuth(false);
    };
    */

    const logoutNoDB = (e) => {
      props.setAuth(false);
    }

  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={ themeMode }>
        <div className="MainEntry">
          <GlobalStyles /> {/* themes */} 

          <BgParticles /> {/* already set as background */}        

          <Navbar> {/* ltr */ }
            <span className="navbar-title">Hello -name- </span>
            <button className='logout-btn' onClick={e=>logoutNoDB(e)}>Log out</button> {/* << You can do whatever you want with this btn, just keep the onClick the same */}


            <DarkModeToggle theme={ theme } toggleTheme={ toggleTheme }/>
            <NavItem icon={<FontAwesomeIcon icon={ faEllipsisV } />}>
              <DropdownMenuMain />
            </NavItem>

          </Navbar>

      </div>
    </ThemeProvider>
  );
}



export default Dashboard;
