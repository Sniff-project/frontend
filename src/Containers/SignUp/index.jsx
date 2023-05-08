import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@components/ui";
import { AuthContext } from "@contexts";
import { register } from "@core/Services";
import { Spinner, Grid } from "@components/simple";
import { Message, withMessage } from "@components/ordinary";
import SignUpForm from "@components/smart/SignUpForm";
import "./styles.scss";

const SignUpBlock = () => {
  const { login } = useContext(AuthContext);
  const dispatch = useDispatch();
  const signUpState = useSelector((state) => state.signUp);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const onSubmitHandler = (data) => {
    dispatch(register(data)).then((token) => {
      login(token);
    });
  };

  const ErrorMessage = withMessage(Message, {
    messageType: "error",
  });

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
        <ErrorMessage message={signUpState.error.message} mt={8} mx="auto" />
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
