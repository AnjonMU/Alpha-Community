// UserLoginRegister.js
import React, { useState } from 'react';
import './UserLoginRegister.css';

const UserLoginRegister = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            const username = formData.fullName.toLowerCase().replace(/\s+/g, '') + Math.floor(Math.random() * 1000);
            alert(`Registration Successful! Your Username: ${username}`);
        } else {
            alert('Logged in successfully!');
        }
    };

    return ( <
        div className = "user-login-container" >
        <
        h2 > { isRegister ? 'Register' : 'User Login' } < /h2> <
        form onSubmit = { handleSubmit }
        className = "user-form" > {
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
        button type = "submit" > { isRegister ? 'Register' : 'Login' } < /button> < /
        form > <
        p className = "toggle-text" > { isRegister ? 'Already have an account?' : "Don't have an account?" } <
        span onClick = { toggleForm } > { isRegister ? ' Login here' : ' Register here' } <
        /span> < /
        p > <
        /div>
    );
};

export default UserLoginRegister;