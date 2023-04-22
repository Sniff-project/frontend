import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "@components/smart/SignInForm";
import "./styles.scss";

const SignInBlock = () => {
  return (
    <div id="SignInBlock">
      <div className="block__container">
        <div className="block__content">
          <div className="d-flex justify-content-center mb-9">
            <h3 className="block__title m-0">Вхід</h3>
          </div>
          <SignInForm />
          <div className="block__content-after-form d-flex justify-content-center flex-wrap mt-8">
            <p className="mb-2 mb-sm-0">Ще не з нами?</p>
            <Link
              to="/signup"
              className="color-black text-decoration-underline mb-0"
            >
              Зареєструватись
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInBlock;
