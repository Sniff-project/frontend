import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { login as loginUser } from "@core/Services";
import { Link } from "@components/ui";
import { Spinner, Grid } from "@components/simple";
import { Message, withMessage } from "@components/ordinary";
import SignInForm from "@components/smart/SignInForm";
import "./styles.scss";

const SignInBlock = () => {
  const { login } = useContext(AuthContext);
  const dispatch = useDispatch();
  const signInState = useSelector((state) => state.signIn);
  const [showPassword, setShowPassword] = useState(false);

  const ErrorMessage = withMessage(Message, {
    messageType: "error",
  });

  const onSubmitHandler = (data) => {
    dispatch(loginUser(data)).then((token) => {
      login(token);
    });
  };

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
              <ErrorMessage message={signInState.error.message} mb={8} />
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
