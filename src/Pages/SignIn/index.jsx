import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@contexts";
import { SignInBlock } from "@containers/SignIn";
import { Container, Grid } from "@components/simple";

const Login = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return (
    <Container>
      <Grid container justifyContent="center">
        <SignInBlock />
      </Grid>
    </Container>
  );
};

export default Login;
