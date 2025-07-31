// src/components/LoginForm.jsx

import React, { useState } from 'react';
import './LoginForm.css'; // চাইলে CSS আলাদা রাখতে পারো

const LoginForm = ({ onRegisterClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('User login:', { username, password });
    // এখানেই লগইন API call করবে
  };

  return (
    <div className="login-form">
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <span onClick={onRegisterClick} className="register-link">Register</span></p>
    </div>
  );
};

export default LoginForm;
