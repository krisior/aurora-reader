import React from 'react';
import {Link} from 'react-router-dom';

import './LoginRegisterForm.css';

const LoginRegister = () => {
    
    return(
        <div className="box-1">
            <Link to="/login">
                <button className="login-button-box-1" >login</button>
            </Link>
            <div className="space-divider" />
            <Link to="/register">
                <button className="register-button-box-1" >register</button>
            </Link>
        </div>
    );

}

export default LoginRegister;