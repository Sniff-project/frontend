import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import ModalContainer from "@containers/Modal";
import SignInBlock from "@containers/SignIn";
import SignUpBlock from "@containers/SignUp";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = sessionStorage.getItem("jwtToken");
  const isAuth = token ? true : false;

  const [isAuthenticated, setIsAuthenticated] = useState(isAuth);
  const [openModal, setOpenModal] = useState(null);
  const [user, setUser] = useState(null);
  const history = useNavigate();

  const signInOpenHandler = () => {
    if (!user) setOpenModal("SignIn");
  };
  const signUpOpenHandler = () => {
    if (!user) setOpenModal("SignUp");
  };
  const closeModalHandler = () => setOpenModal(null);

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
      closeModalHandler();
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
    signUpOpenHandler,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      <ModalContainer open={!!openModal} onClose={closeModalHandler}>
        {openModal === "SignIn" ? (
          <SignInBlock onRegisterClick={signUpOpenHandler} />
        ) : (
          <SignUpBlock onLoginClick={signInOpenHandler} />
        )}
      </ModalContainer>
    </AuthContext.Provider>
  );
};
