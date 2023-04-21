import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@contexts";
import { SignInPopup } from "@components/smart";

const Login = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return <SignInPopup />;
};

export default Login;
