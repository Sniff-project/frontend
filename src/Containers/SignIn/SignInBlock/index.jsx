import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { AuthContext } from "@contexts";
import { login as loginUser } from "@core/Services";
import { Link } from "@components/ui";
import { Spinner } from "@components/simple";
import { Message } from "@components/ordinary";
import SignInForm from "@components/smart/SignInForm";
import "./styles.scss";

const SignInBlock = () => {
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
    <div id="SignInBlock">
      <div className="block__container">
        {signInState.isLoading && <Spinner size={100} />}
        <div className="block__content">
          <Grid container justifyContent="center" mb={6}>
            <h3 className="block__title">Вхід</h3>
          </Grid>
          <div className="block__form">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInBlock;
