import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { login as loginUser } from "@core/Services";
import { Link1 } from "@components/ui";
import { Spinner } from "@components/simple";
import { ErrorMessage } from "@components/ordinary";
import SignInForm from "@components/smart/SignInForm";
import "./styles.scss";

const SignInBlock = () => {
  const { login } = useContext(AuthContext);
  const dispatch = useDispatch();
  const signInState = useSelector((state) => state.signIn);
  const [showPassword, setShowPassword] = useState(false);

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
          <div className="d-flex justify-content-center mb-9">
            <h3 className="block__title m-0">Вхід</h3>
          </div>
          <div className="block__form">
            {signInState.error && (
              <ErrorMessage
                message={signInState.error}
                margin={{ bottom: 8 }}
              />
            )}
            <SignInForm onSubmit={onSubmitHandler} toggleShowPassword={toggleShowPassword} showPassword={showPassword}/>
            <div className="block__content-after-form d-flex justify-content-center flex-wrap mt-8">
              <p className="mb-2 mb-sm-0">Ще не з нами?</p>
              <Link1 to="/signup">Зареєструватись</Link1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInBlock;
