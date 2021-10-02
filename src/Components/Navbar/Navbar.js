import react, { useState } from "react";
import { CSSTransition } from 'react-transition-group'

import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faCog, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const Navbar = (props) => {
    return (
        <nav className="navbar">
            
            <ul className="navbar-nav"> { props.children } </ul>
        </nav>
    );
}

export const NavItem = (props) => {

    const [open, setOpen] = useState(false);

    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                { props.icon }
            </a>

            { open && props.children }
        </li>
    );
}

export const DropdownMenu1 = () => {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState('main');

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={ () => props.goToMenu && setActiveMenu(props.goToMenu) } >
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

                    <DropdownItem><p>...</p></DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'settings'} 
                unmountOnExit 
                timeout={150}
                classNames="menu-secondary"
                onEnter={calcHeight}
                >
                
                <div className="menu">
                    <DropdownItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} />} goToMenu="main">
                                
                    </DropdownItem>
                    <DropdownItem><p>...</p></DropdownItem>
                    <DropdownItem><p>...</p></DropdownItem>
                    <DropdownItem><p>...</p></DropdownItem>
                    <DropdownItem><p>...</p></DropdownItem>
                    <DropdownItem><p>...</p></DropdownItem>
                    <DropdownItem><p>...</p></DropdownItem>
                    <DropdownItem><p>...</p></DropdownItem>
                    
                </div>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'about'} 
                unmountOnExit 
                timeout={150}
                classNames="menu-secondary"
                onEnter={calcHeight}
                >
                
                <div className="menu">
                    <DropdownItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} />} goToMenu="main">
                                
                    </DropdownItem>
                    <DropdownItem >
                        <a href="###"><div className="about-text">
                            <p>
                                <span className="small-about-text-gradient">aurora reader © 2021<br /><br /></span>
                                <span className="small-about-text">authors:</span>
                                
                                <br /><br />

                                <span className="authors-about-text">
                                    Ula Mądzielewska<br /><br />
                                    Pola Nadarzewska<br /><br />
                                    Sandra Gołuńska<br /><br />
                                    Krzysztof Wiłnicki
                                </span>
                            </p>
                        </div></a>
                    </DropdownItem>
                    <DropdownItem>
                        ...
                    </DropdownItem>
                    
                </div>
            </CSSTransition>

            
        </div>
    );
}
