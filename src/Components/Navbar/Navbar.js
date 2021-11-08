import { useState} from "react";
import {Link} from "react-router-dom";


import { CSSTransition } from 'react-transition-group'

import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCog, faInfoCircle, faMoon, faSun, faPalette, faQuestionCircle, faPowerOff } from "@fortawesome/free-solid-svg-icons";

import { faUser } from '@fortawesome/fontawesome-free-regular';

export const Navbar = (props) => {

    //const [ theme, setTheme ] = useDarkMode();
    
    return (
        <nav className="navbar">
            <ul className="navbar-logo">
                <Link to="/" className="logo-button" />
            </ul>

            <ul className="navbar-nav"> { props.children } </ul>
        </nav>
    );
}

export const NavItem = (props) => {

    const [open, setOpen] = useState(false);        

    return(
        <li className="nav-item">
            <a className="icon-button" onClick={() => setOpen(!open)}>
                { props.icon }
            </a>
            { open && props.children }
        </li>
    );
}

export const DarkModeToggle = ({ theme, toggleTheme }) => {
    
    return (
        <li className="nav-item">
            <a className="icon-button">
                <div onClick={ toggleTheme }>
                    { theme === 'light'
                    ? 
                    <FontAwesomeIcon icon={faMoon} />
                    : 
                    <FontAwesomeIcon icon={faSun} />}
                </div>
            </a>
        </li>
    )
}

export const DropdownMenuIntro = () => {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState('main');

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a className="menu-item" onClick={ () => props.goToMenu && setActiveMenu(props.goToMenu) } >
                <span className="icon-left">{ props.leftIcon }</span>

                { props.children }

                <span className="icon-right">{ props.rightIcon }</span>
            </a>
        );
    }

    return(
        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={150}
                classNames="menu-primary"
                onEnter={calcHeight}
                >
                
                <div className="menu">

                    <DropdownItem
                        rightIcon={<FontAwesomeIcon icon={faInfoCircle} />} goToMenu="about">
                        <p>about</p></DropdownItem>

                    <DropdownItem><p>...</p></DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'about'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
                >
                
                <div className="menu">
                    <DropdownItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} />} goToMenu="main">
                                
                    </DropdownItem>
                    <DropdownItem >
                        <a><div className="about-text">
                            <p>
                                <span className="small-about-text-gradient">aurora reader © 2021<br /><br /></span>
                                <span className="small-about-text">authors:</span>
                                
                                <br /><br />

                                <span className="authors-about-text">
                                    Ula Mądzielewska<br /><br />
                                    Pola Nadarzewska<br /><br />
                                    Sandra Gołuńska<br /><br />
                                    Krzysiek Wiłnicki
                                </span>
                            </p>
                        </div></a>
                    </DropdownItem>
                    
                </div>
            </CSSTransition>

            
        </div>
    );
}

export const DropdownMenuMain = (props) => {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState('main');
    
    const logoutNoDB = (e) => {
        props.setAuth(false);
    }

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {

        return (
            <a className="menu-item" onClick={ () => props.goToMenu && setActiveMenu(props.goToMenu) } >
                <span className="icon-left">{ props.leftIcon }</span>

                { props.children }

                <span className="icon-right">{ props.rightIcon }</span>
            </a>
        );
    }

    return(
        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={150}
                classNames="menu-primary"
                onEnter={calcHeight}
                >
                
                <div className="menu">
                    <DropdownItem
                        rightIcon={<FontAwesomeIcon icon={faCog} />} goToMenu="settings">
                        <p>settings</p>
                    </DropdownItem>

                    <DropdownItem
                        rightIcon={<FontAwesomeIcon icon={faInfoCircle} />} goToMenu="about">
                        <p>about</p></DropdownItem>

                    <div onClick={e=>logoutNoDB(e)} >
                    <DropdownItem onClick={e=>logoutNoDB(e)} 
                        rightIcon={<FontAwesomeIcon icon={faPowerOff} />}>
                        <p style={{fontWeight: "1000"}}>logout</p>
                    </DropdownItem>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'settings'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
                >
                
                <div className="menu">
                    <DropdownItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} />} goToMenu="main">
                                
                    </DropdownItem>
                    <DropdownItem
                        rightIcon={<FontAwesomeIcon icon={ faUser } />}
                        goToMenu="account-settings">
                        
                        <p>account</p>
                    </DropdownItem>

                    <DropdownItem
                        rightIcon={<FontAwesomeIcon icon={ faPalette } />}
                        goToMenu="appearance-settings">
                        
                        <p>appearance</p>
                    </DropdownItem>
                    
                    <a>
                    <DropdownItem
                        rightIcon={<FontAwesomeIcon icon={ faQuestionCircle } />}>
                    
                    <p>help</p>
                    </DropdownItem>
                    </a>
                    
                </div>

            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'about'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
                >
                
                <div className="menu">
                    <DropdownItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} />} goToMenu="main">
                                
                    </DropdownItem>
                    <DropdownItem >
                        <a><div className="about-text">
                            <p>
                                <span className="small-about-text-gradient">aurorareader © 2021<br /><br /></span>
                                <span className="small-about-text">authors:</span>
                                
                                <br /><br />

                                <span className="authors-about-text">
                                    ula mądzielewska<br /><br />
                                    pola nadarzewska<br /><br />
                                    sandra gołuńska<br /><br />
                                    krzysiek wiłnicki
                                </span>
                            </p>
                        </div></a>
                    </DropdownItem>
                    
                </div>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'account-settings'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-tertiary"
                onEnter={calcHeight}
                >
                
                <div className="menu">
                    <DropdownItem
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} />} goToMenu="settings">
                                
                    </DropdownItem>
                    <DropdownItem >
                        ...
                    </DropdownItem>
                    
                </div>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'appearance-settings'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-tertiary"
                onEnter={calcHeight}
                >
                
                <div className="menu">
                    <DropdownItem
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} />} goToMenu="settings">
                                
                    </DropdownItem>
                    <DropdownItem >
                        ...
                    </DropdownItem>
                    
                </div>
            </CSSTransition>
            
        </div>
    );
}