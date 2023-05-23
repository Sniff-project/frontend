import { Container, Grid } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useAuth } from "@core/Hooks";
import { SignInBlock } from "@containers/SignIn";

const Login = () => {
  const { isAuthenticated } = useAuth();

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
