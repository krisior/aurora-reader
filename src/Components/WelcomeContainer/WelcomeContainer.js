import React from 'react'

import './WelcomeContainer.css'

function WelcomeContainer() {

    return(
        <div className="page-content">
            <div className="aurora-name">
                <p><span style={{fontWeight: "1000", fontSize: "120px"}}>aurora</span><span style={{fontWeight: "50", fontSize: "70px"}}> e-book reader </span></p>
                <span className="aurora-quote">Simply. Done.</span>
            </div>
        </div>
    )
}

export default WelcomeContainer;