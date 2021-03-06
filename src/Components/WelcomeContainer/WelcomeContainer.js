import React from 'react'

import './WelcomeContainer.css'

function WelcomeContainer() {

    return(
        <div className="page-content">
            <div className="aurora-name">
                <p><span style={{fontWeight: "1000", fontSize: "130px"}}>aurora</span><span style={{fontWeight: "50", fontSize: "50px"}}> e-book reader </span></p>
                <p className="aurora-quote">read <span className="aurora-quote-animation" >easier</span> </p>
            </div>
        </div>
    )
}

export default WelcomeContainer;