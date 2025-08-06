// src/context/AuthContext.js

import React, { createContext, useState, useContext } from 'react';

// Context তৈরি
const AuthContext = createContext();

// Custom Hook
export const useAuth = () => useContext(AuthContext);

// Provider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // null মানে কেউ logged in না

    const login = (userData) => {
        setUser(userData); // user data object save
    };

    const logout = () => {
        setUser(null); // logout করলে user null হবে
    };

    return ( <
        AuthContext.Provider value = {
            { user, login, logout }
        } > { children } <
        /AuthContext.Provider>
    );
};