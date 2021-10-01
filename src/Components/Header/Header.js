import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faAdjust} from '@fortawesome/free-solid-svg-icons'

import './Header.css'
import logo_1 from './logo.png'

function Header() {

    return(
        <div className="header">
            <div className="inner-header">
                <div className="logo-container">
                    <img className="logo-1-1" src={logo_1} alt="logo-1-1" />
                </div>

                <ul className="navigation-panel">
                    <a><li><FontAwesomeIcon icon={faAdjust}/></li></a>
                    <a><li><FontAwesomeIcon icon={faEllipsisV}/></li></a>
                </ul>
            </div>
        </div>
    )
}

export default Header;