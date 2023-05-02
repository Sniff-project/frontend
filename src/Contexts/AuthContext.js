import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = sessionStorage.getItem("jwtToken");
  const isAuth = token ? true : false;

  const [isAuthenticated, setIsAuthenticated] = useState(isAuth);
  const [user, setUser] = useState(null);
  const history = useNavigate();

  const login = (jwtToken) => {
    setIsAuthenticated(true);
    sessionStorage.setItem("jwtToken", jwtToken);
    history("/profile");
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("jwtToken");
  };

  useEffect(() => {
    if (isAuthenticated) {
      try {
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        setUser(decoded);

        // Check if token has expired
        if (decoded.exp < currentTime) {
          logout();
        }
      } catch (error) {
        console.error("Invalid token");
        logout();
      }
    }
  }, [isAuthenticated, token]);

  const value = {
    token,
    isAuthenticated,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
