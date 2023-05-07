import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { login as loginUser } from "@core/Services";
import { Link } from "@components/ui";
import { Spinner, Grid } from "@components/simple";
import { ErrorMessage } from "@components/ordinary";
import SignInForm from "@components/smart/SignInForm";
import "./styles.scss";

const SignInBlock = () => {
  const { login } = useContext(AuthContext);
  const dispatch = useDispatch();
  const signInState = useSelector((state) => state.signIn);

  const onSubmitHandler = (data) => {
    dispatch(loginUser(data)).then((token) => {
      login(token);
    });
  };

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
            <SignInForm onSubmit={onSubmitHandler} />
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              mt={7}>
              <Grid item mb={{ xs: 2, md: 0 }} mr={{ xs: 0, md: 2 }}>
                Ще не з нами?
              </Grid>
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
