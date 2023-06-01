import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import SignInPopup from "@containers/SignIn/SignInPopup";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = sessionStorage.getItem("jwtToken");
  const isAuth = token ? true : false;

  const [isAuthenticated, setIsAuthenticated] = useState(isAuth);
  const [signInIsOpen, setSignInIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const history = useNavigate();

  const signInOpenHandler = () => {
    if (!user) setSignInIsOpen(true);
  };
  const signInCloseHandler = () => setSignInIsOpen(false);

  const login = (jwtToken) => {
    setIsAuthenticated(true);
    sessionStorage.setItem("jwtToken", jwtToken);
    history("/profile");
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem("jwtToken");
  };

  useEffect(() => {
    if (isAuthenticated) {
      signInCloseHandler();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      try {
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        setUser(decoded);

        // Check if token has expired
        if (decoded.exp < currentTime) {
          logout();
        } else {
          const interval = setInterval(() => {
            if (decoded.exp < currentTime) {
              logout();
              console.log(isAuthenticated, "logout");
              clearInterval(interval);
            }
          }, currentTime - decoded.exp + 1);
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
    signInOpenHandler,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      <SignInPopup open={signInIsOpen} onClose={signInCloseHandler} />
    </AuthContext.Provider>
  );
};
