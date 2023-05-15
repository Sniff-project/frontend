import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Link } from "@components/ui";
import { AuthContext } from "@contexts";
import { register } from "@core/Services";
import { Spinner } from "@components/simple";
import { Message } from "@components/ordinary";
import SignUpForm from "@components/smart/SignUpForm";
import "./styles.scss";

const SignUpBlock = () => {
  const auth = useContext(AuthContext);
  const dispatch = useDispatch();
  const signUpState = useSelector((state) => state.signUp);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const onSubmitHandler = (data) => {
    dispatch(register(data));
  };

  useEffect(() => {
    if (signUpState.data?.jwtToken) {
      auth.login(signUpState.data.jwtToken);
      signUpState.data = null;
    }
  }, [auth, signUpState]);

  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <section className="registration">
      {signUpState.isLoading && <Spinner size={100} />}
      <h2 className="registration__title">Реєстрація</h2>
      {signUpState.error && (
        <Message
          message={signUpState.error.message}
          messageType="error"
          mt={8}
          mx="auto"
        />
      )}
      <SignUpForm
        onSubmit={onSubmitHandler}
        toggleShowPassword1={toggleShowPassword1}
        toggleShowPassword2={toggleShowPassword2}
        showPassword1={showPassword1}
        showPassword2={showPassword2}
      />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        mt={7}
        rowSpacing={1}
        columnSpacing={2}>
        <Grid item>Вже маєш аккаунт?</Grid>
        <Grid item>
          <Link href="/signin">Вхід</Link>
        </Grid>
      </Grid>
    </section>
  );
};

export default SignUpBlock;
