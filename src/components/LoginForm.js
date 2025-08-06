// src/components/LoginForm.js
import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import './LoginForm.css';

const LoginForm = () => {
    const [isRegister, setIsRegister] = useState(false);

    return ( <
        div className = "login-form-container" > {!isRegister ? ( <
                div className = "login-box" >
                <
                h2 > User Login < /h2> <
                form >
                <
                input type = "text"
                placeholder = "Username"
                required / >
                <
                input type = "password"
                placeholder = "Password"
                required / >
                <
                button type = "submit" > Login < /button> < /
                form > <
                p > Don 't have an account? <span onClick={() => setIsRegister(true)}>Register</span></p> < /
                div >
            ) : ( <
                RegisterForm setIsRegister = { setIsRegister }
                />
            )
        } <
        /div>
    );
};

export default LoginForm;