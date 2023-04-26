import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isAuth = sessionStorage.getItem("jwtToken") ? true : false;

  const [isAuthenticated, setIsAuthenticated] = useState(isAuth);
  const history = useNavigate();

  const login = (token) => {
    setIsAuthenticated(true);
    sessionStorage.setItem("jwtToken", token);
    history("/profile");
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("jwtToken");
  };

  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
