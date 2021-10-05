import React, { useState } from 'react';
import {Link} from 'react-router-dom';


import './LoginForm.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import ReactIsCapsLockActive from '@matsun/reactiscapslockactive';

const LoginForm = (props) => { 
    
    const [inputs,setInputs]=useState({
        email:"",
        password:"",
    });

    const {email,password} = inputs;

    const onChange = (e) =>{
        setInputs({...inputs, [e.target.name]: e.target.value});
    };

    const onSubmitForm = async(e)=>{
        e.preventDefault();
        try {

            const body = {email,password};

            const response = await fetch("http://localhost:4000/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();

            localStorage.setItem("token", parseRes.token);

            props.setAuth(true);

        } catch (err) {
            console.error(err.message);
        }
    }


    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    

    return(
        <form className="box-1-loginform" onSubmit={onSubmitForm}>

            <div className="new-to-aurora-1">
                <span>new to aurora? <Link to="/register">create an account.</Link></span>
            </div>
            
            <input
              type="email"
              name="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => onChange(e)}
              />

            <input 
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => onChange(e)}
              />
            
            <div className="show-password-login" onClick={togglePasswordVisiblity}><i><FontAwesomeIcon icon={passwordShown ? faEye : faEyeSlash } /></i></div>
            
            <div className="caps-lock">
                <ReactIsCapsLockActive >
                    {active => <span> {active ? 'caps lock is active' : ''}</span>}
                </ReactIsCapsLockActive>
            </div>

            <div className="password-forgot-1">
                <div className="space-divider" />

                <Link to="/">forgot password?</Link> {/* << Link to be changed */}
            </div>
            <div className="height-divider" />
            <button className="loginform" name="" value="Login">login</button>
        </form>
    );

}

export default LoginForm;