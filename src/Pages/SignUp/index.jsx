import React from "react";
import SignUpForm from "../../Components/smart/SignUpForm";
import { Navbar } from "@containers/Navbar";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
