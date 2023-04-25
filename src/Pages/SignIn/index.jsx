import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@contexts";
import { SignInBlock } from "@containers/SignIn";

const Login = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="container p-0">
      <div className="d-flex justify-content-center">
        <SignInBlock />
      </div>
    </div>
  );
};

export default Login;
