import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import React, { useState, Component } from 'react';
import './RegisterForm.css';
    

export const RegisterForm = () => {


    return(
        <form className="box-1-loginform" method="post">

            <input type="text" name="" placeholder="username" />
            <input type="text" name="" placeholder="e-mail" />
            <input type="password" name="" placeholder="password"></input>
            <input type="password" name="" placeholder="confirm password" />
            <div className="already-an-account">
                <a href="#">already have an account? <span style={{fontWeight: "1000"}}>log in.</span></a>
            </div>
            <div className="height-divider" />

            <button className="loginform" name="" value="Login">register</button>
        </form>
    );
    

}