import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link1 } from "@components/ui";
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
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const onSubmitHandler = (data) => {
    dispatch(register(data)).then((token) => {
      login(token);
    });
  };
  
  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  }
  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  }

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
      <SignUpForm onSubmit={onSubmitHandler} toggleShowPassword1={toggleShowPassword1} toggleShowPassword2={toggleShowPassword2} showPassword1={showPassword1} showPassword2={showPassword2}/>
      <div className="block__content-after-form d-flex justify-content-center flex-wrap mt-8">
        <p className="mb-2 mb-sm-0">Вже маєш аккаунт?</p>
        <Link1 to="/signin">Вхід</Link1>
      </div>
    </section>
  );
};

export default SignUpBlock;
