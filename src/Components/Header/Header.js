import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAdjust} from '@fortawesome/free-solid-svg-icons'
import './Header.css'



function Header() {

    return(
        <div className="header">
            <div className="self-header">
                <p><FontAwesomeIcon icon={faAdjust} /></p>   
            </div>
        </div>
    )
}

export default Header;