import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './RegisterForm.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import ReactIsCapsLockActive from '@matsun/reactiscapslockactive';

//const Eye = <FontAwesomeIcon icon={faEye} />;
//const EyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

export const RegisterForm = (props) => {


    const [inputs,setInputs] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const {name,email,password,password2} = inputs;

    const onChange = (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try {

            const body = {name,email,password,password2};

            const response = await fetch("http://localhost:4000/auth/register", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();

            localStorage.setItem("token", parseRes.token);

            props.setAuth(true);

        } catch (err) {
            console.error(err.message);
        }
    };




    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    

    return(
        <form className="box-1-registerform" onSubmit={onSubmitForm}>

            <input
                type="text"
                name="name"
                placeholder="username"
                value={name}
                onChange={e=>onChange(e)}
            />

            <input
                type="email"
                name="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={e=>onChange(e)}
            />
            
            <input 
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="password"
                value={password}
                onChange={e=>onChange(e)}

            />
            <div className="show-password" onClick={togglePasswordVisiblity}><i><FontAwesomeIcon icon={passwordShown ? faEye : faEyeSlash } /></i></div>
            
            <input 
                type={passwordShown ? "text" : "password"}
                name="password2"
                placeholder="confirm password"
                value={password2}
                onChange={e=>onChange(e)}
            />

            <div className="caps-lock">
                <ReactIsCapsLockActive >
                    {active => <span> {active ? 'caps lock is active' : ''}</span>}
                </ReactIsCapsLockActive>
            </div>


            <div className="already-an-account">
                already have an account? <Link to="/login"><span>log in.</span></Link>
            </div>
            <div className="height-divider" />

            <button className="registerform">register</button>
        </form>
    );
    

}