// src/components/UserLoginForm.js
import React, { useState } from 'react';
import './UserLoginForm.css';

const UserLoginForm = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            const username = formData.fullName.toLowerCase().replace(/\s+/g, '') + Math.floor(Math.random() * 1000);
            alert(`Registered successfully!\nYour Username: ${username}`);
        } else {
            alert(`Logged in successfully as ${formData.email}`);
        }
    };

    return ( <
        div className = "user-login-container" >
        <
        h2 > { isRegister ? "🔐 Register" : "🔓 User Login" } < /h2> <
        form onSubmit = { handleSubmit } > {
            isRegister && ( <
                input type = "text"
                name = "fullName"
                placeholder = "Full Name"
                value = { formData.fullName }
                onChange = { handleChange }
                required /
                >
            )
        } <
        input type = "email"
        name = "email"
        placeholder = "Email"
        value = { formData.email }
        onChange = { handleChange }
        required /
        >
        <
        input type = "password"
        name = "password"
        placeholder = "Password"
        value = { formData.password }
        onChange = { handleChange }
        required /
        >
        <
        button type = "submit" > { isRegister ? "Register" : "Login" } < /button> < /
        form > <
        p onClick = { handleToggle }
        className = "toggle-text" > { isRegister ? "Already have an account? Login" : "Don't have an account? Register" } <
        /p> < /
        div >
    );
};

export default UserLoginForm;