import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    
    return(
        <form className="box-1-loginform" method="post">
            <div className="new-to-aurora-1">
                <a>new to aurora? <a href="#" style={{fontWeight: "1000"}}>create an account.</a></a>
            </div>
            <input type="text" name="" placeholder="username" />
            <input type="password" name="" placeholder="password" />
            
            <div className="password-forgot-1">
                <a href="#">forgot password?</a>
            </div>
            <div className="height-divider" />
            <button className="loginform" name="" value="Login">login</button>
        </form>
    );

}

export default LoginForm;