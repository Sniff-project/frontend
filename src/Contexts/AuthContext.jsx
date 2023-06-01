import React, { createContext, useState, useEffect, useCallback } from "react";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ModalContainer from "@containers/Modal";
import SignInBlock from "@containers/SignIn";
import SignUpBlock from "@containers/SignUp";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("jwtToken");
  const name = localStorage.getItem("name");
  const isAuth = token ? true : false;

  const { profile } = useSelector((state) => state.profile);

  const [isAuthenticated, setIsAuthenticated] = useState(isAuth);
  const [openModal, setOpenModal] = useState(null);
  const [user, setUser] = useState({ name: name });
  const history = useNavigate();

  const signInOpenHandler = () => {
    if (!isAuthenticated) setOpenModal("SignIn");
  };
  const signUpOpenHandler = () => {
    if (!isAuthenticated) setOpenModal("SignUp");
  };
  const closeModalHandler = () => setOpenModal(null);

  const login = (jwtToken) => {
    setIsAuthenticated(true);
    localStorage.setItem("jwtToken", jwtToken);
    history("/profile");
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("name");
  };

  const setUserName = useCallback((name) => {
    setUser((prev) => ({ ...prev, name: name }));
    localStorage.setItem("name", name);
  }, []);

  useEffect(() => {
    if (profile?.firstname) setUserName(profile.firstname);
  }, [profile?.firstname, setUserName]);

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
        setUser((prev) => ({ ...prev, ...decoded }));

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
    setUserName,
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
