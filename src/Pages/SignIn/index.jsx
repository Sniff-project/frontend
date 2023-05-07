import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@contexts";
import { SignInBlock } from "@containers/SignIn";
import { Grid } from "@components/simple";

const Login = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return (
    <Grid container p={0}>
      <Grid container justifyContent="center">
        <SignInBlock />
      </Grid>
    </Grid>
  );
};

export default Login;
