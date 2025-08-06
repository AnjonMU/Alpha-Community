// src/components/RegisterForm.js
import React from 'react';

const RegisterForm = ({ setIsRegister }) => {
    return ( <
        div className = "login-box" >
        <
        h2 > User Registration < /h2> <
        form >
        <
        input type = "text"
        placeholder = "Full Name"
        required / >
        <
        input type = "email"
        placeholder = "Email"
        required / >
        <
        input type = "password"
        placeholder = "Password"
        required / >
        <
        button type = "submit" > Register < /button> < /
        form > <
        p > Already have an account ? < span onClick = {
            () => setIsRegister(false)
        } > Login < /span></p >
        <
        /div>
    );
};

export default RegisterForm;