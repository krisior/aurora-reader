import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import React, { useState, Component } from 'react';
import './RegisterForm.css';

import ReactIsCapsLockActive from '@matsun/reactiscapslockactive';

const Eye = <FontAwesomeIcon icon={faEye} />;
const EyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

export const RegisterForm = ({ shown, toggleShown }) => {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    

    return(
        <form className="box-1-registerform" method="post">

            <input type="text" name="" placeholder="username" />
            <input type="text" name="" placeholder="e-mail" />
            
            <input 
                type={passwordShown ? "text" : "password"}
                name="" 
                placeholder="password"

            ></input>
            <div className="show-password" onClick={togglePasswordVisiblity}><i><FontAwesomeIcon icon={passwordShown ? faEye : faEyeSlash } /></i></div>
            
            <input 
                type={passwordShown ? "text" : "password"}
                name="" 
                placeholder="confirm password"

            ></input>

            <div className="caps-lock">
                <ReactIsCapsLockActive >
                    {active => <span> {active ? 'caps lock is active' : ''}</span>}
                </ReactIsCapsLockActive>
            </div>


            <div className="already-an-account">
                already have an account? <a href="#"><span>log in.</span></a>
            </div>
            <div className="height-divider" />

            <button className="registerform" name="" value="Register">register</button>
        </form>
    );
    

}