// src/components/AdminLogin.jsx

import React, { useState } from 'react';

const AdminLogin = () => {
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();
    console.log('Admin login:', { adminUser, adminPass });
    // এখানে অ্যাডমিন লগইনের API call করবে
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <form onSubmit={handleAdminLogin}>
        <input type="text" placeholder="Admin Username" onChange={(e) => setAdminUser(e.target.value)} required />
        <input type="password" placeholder="Admin Password" onChange={(e) => setAdminPass(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
