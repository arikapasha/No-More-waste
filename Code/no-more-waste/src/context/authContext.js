import React from "react";
import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(process.env.REACT_APP_BASE_URL + "/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    setCurrentUser(null);
    const res = await axios.post(process.env.REACT_APP_BASE_URL + "/auth/logout");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
