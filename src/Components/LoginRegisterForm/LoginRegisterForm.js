import React from 'react';
import './LoginRegisterForm.css';

const LoginRegister = () => {
    
    return(
        <form className="box-1" action="./App.js" method="post">
            
            <button className="login-button-box-1" name="" value="Login">login</button>
            <div className="space-divider" />
            <button className="register-button-box-1" name="" value="Register">register</button>
        </form>
    );

}

export default LoginRegister;