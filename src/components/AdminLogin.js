// src/components/AdminLogin.js
import React from 'react';

const AdminLogin = () => {
    return ( <
        div className = "login-form-container" >
        <
        div className = "login-box" >
        <
        h2 > Admin Login < /h2> <
        form >
        <
        input type = "text"
        placeholder = "Admin Username"
        required / >
        <
        input type = "password"
        placeholder = "Admin Password"
        required / >
        <
        button type = "submit" > Login < /button> < /
        form > <
        /div> < /
        div >
    );
};

export default AdminLogin;