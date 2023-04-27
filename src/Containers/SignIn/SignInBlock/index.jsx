import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { login as loginUser } from "@core/Services";
import { Link1 } from "@components/ui";
import { ErrorMessage, Spinner } from "@components/simple";
import SignInForm from "@components/smart/SignInForm";
import "./styles.scss";

const SignInBlock = () => {
  const { login } = useContext(AuthContext);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const onSubmitHandler = (data) => {
    dispatch(loginUser(data)).then((token) => {
      login(token);
    });
  };

  return (
    <div id="SignInBlock">
      <div className="block__container">
        {authState.isLoading && <Spinner size={100} />}
        <div className="block__content">
          <div className="d-flex justify-content-center mb-9">
            <h3 className="block__title m-0">Вхід</h3>
          </div>
          <div className="block__form">
            {authState.error && <ErrorMessage message={authState.error} />}
            <SignInForm onSubmit={onSubmitHandler} />
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
