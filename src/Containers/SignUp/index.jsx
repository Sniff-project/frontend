import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { register } from "@core/Services";
import { Spinner } from "@components/simple";
import { ErrorMessage } from "@components/ordinary";
import SignUpForm from "@components/smart/SignUpForm";
import "./styles.scss";

const SignUpBlock = () => {
  const { login } = useContext(AuthContext);
  const dispatch = useDispatch();
  const signUpState = useSelector((state) => state.signUp);

  const onSubmitHandler = (data) => {
    dispatch(register(data)).then((token) => {
      login(token);
    });
  };

  return (
    <section className="registration">
      {signUpState.isLoading && <Spinner size={100} />}
      <h2 className="registration__title">Реєстрація</h2>
      {signUpState.error && (
        <ErrorMessage
          message={signUpState.error}
          margin={{ top: 8, right: "auto", left: "auto" }}
        />
      )}
      <SignUpForm onSubmit={onSubmitHandler} />
    </section>
  );
};

export default SignUpBlock;
