import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faAdjust} from '@fortawesome/free-solid-svg-icons'

import './Header.css'

function Header() {

    return(
        <div className="header">
            <div className="inner-header">

                <ul className="navigation-panel">
                    <a><li><FontAwesomeIcon icon={faAdjust}/></li></a>
                    <a><li><FontAwesomeIcon icon={faEllipsisV}/></li></a>
                </ul>
            </div>
        </div>
    )
}

export default Header;