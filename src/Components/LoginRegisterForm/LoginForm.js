import React, { useState } from 'react';
import './LoginForm.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import ReactIsCapsLockActive from '@matsun/reactiscapslockactive';

const LoginForm = () => {
    
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    

    return(
        <form className="box-1-loginform" method="post">
            <div className="new-to-aurora-1">
                <span>new to aurora? <a href="#">create an account.</a></span>
            </div>
            <input type="text" name="" placeholder="e-mail" />

            <input 
                type={passwordShown ? "text" : "password"}
                name="" 
                placeholder="password"

            ></input>
            <div className="show-password-login" onClick={togglePasswordVisiblity}><i><FontAwesomeIcon icon={passwordShown ? faEye : faEyeSlash } /></i></div>
            
            <div className="caps-lock">
                <ReactIsCapsLockActive >
                    {active => <span> {active ? 'caps lock is active' : ''}</span>}
                </ReactIsCapsLockActive>
            </div>

            <div className="password-forgot-1">
                <div className="space-divider" />

                <a href="#">forgot password?</a>
            </div>
            <div className="height-divider" />
            <button className="loginform" name="" value="Login">login</button>
        </form>
    );

}

export default LoginForm;