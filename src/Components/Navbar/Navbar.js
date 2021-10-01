import react, { useState } from "react";
import { CSSTransition } from 'react-transition-group'

import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

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

export const DropdownMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState('main');

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={ () => props.goToMenu && setActiveMenu(props.goToMenu) } >
                {/*<span className="icon-button">{ props.leftIcon }</span>*/}

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
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} />} goToMenu="settings">
                        <p>settings</p>
                    </DropdownItem>

                    <DropdownItem
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} />} goToMenu="about">
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
                        rightIcon={<FontAwesomeIcon icon={faAngleLeft} />} goToMenu="main">
                                
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
                        rightIcon={<FontAwesomeIcon icon={faAngleLeft} />} goToMenu="main">
                                
                    </DropdownItem>
                    <DropdownItem >
                        <div className="about-text">
                            <p>for everyone who loves reading 
                            <br />
                            e-books. 
                            <br /><br />
                            log in our site, add your favourites 
                            <br />
                            and read.
                            <br /><br />
                            click for more.
                            </p>
                        </div>
                    </DropdownItem>
                    
                </div>
            </CSSTransition>

            
        </div>
    );
}
