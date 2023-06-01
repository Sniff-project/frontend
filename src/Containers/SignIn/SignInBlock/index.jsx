import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AuthContext } from "@contexts";
import { login as loginUser } from "@core/Services";
import { Link } from "@components/ui";
import { Spinner } from "@components/simple";
import { Message } from "@components/ordinary";
import SignInForm from "@components/smart/SignInForm";
import { useTheme } from "@emotion/react";
import {
  SignInBlock as StyledBlock,
  ContentBlock,
  ContainerBlock,
  FormBlock,
} from "./styles";

const SignInBlock = () => {
  const theme = useTheme();
  const auth = useContext(AuthContext);
  const dispatch = useDispatch();
  const signInState = useSelector((state) => state.signIn);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (signInState.data?.jwtToken) {
      auth.login(signInState.data.jwtToken);
      signInState.data = null;
    }
  }, [auth, signInState]);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <StyledBlock theme={theme}>
      <ContainerBlock>
        {signInState.isLoading && <Spinner size={100} />}
        <ContentBlock>
          <Grid container justifyContent="center" mb={6}>
            <Typography variant="h1">Вхід</Typography>
          </Grid>
          <FormBlock>
            {signInState.error && (
              <Message
                message={signInState.error.message}
                messageType="error"
                mb={8}
              />
            )}
            <SignInForm
              onSubmit={onSubmitHandler}
              toggleShowPassword={toggleShowPassword}
              showPassword={showPassword}
            />
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              mt={7}
              rowSpacing={1}
              columnSpacing={2}>
              <Grid item>Ще не з нами?</Grid>
              <Grid item>
                <Link href="/signup">Зареєструватись</Link>
              </Grid>
            </Grid>
          </FormBlock>
        </ContentBlock>
      </ContainerBlock>
    </StyledBlock>
  );
};

export default SignInBlock;
