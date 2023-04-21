import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { AuthContext } from "@contexts";
import { login as loginUser } from "@core/Services";
import { ErrorMessage, WarningMessage } from "@components/simple";
import "./SignInForm.scss";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  console.log(authState);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (data) => {
    dispatch(loginUser(data)).then((token) => {
      login(token);
    });
  };

  return (
    <>
      {authState.error && <ErrorMessage message={authState.error} />}
      <form id="LoginForm" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            id="InputEmail"
            placeholder="Пошта або Номер телефону"
            {...register("email", {
              required: true,
              pattern:
                /^[a-z0-9]+@[a-z0-9]{4,}\.[a-z]{2,3}(\.[a-z]{2,3}){0,1}$/i,
            })}
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <WarningMessage message="Please enter a valid email address" />
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            id="InputPassword"
            placeholder="Пароль"
            {...register("password", { required: true, minLength: 8 })}
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && errors.password.type === "required" && (
            <WarningMessage message="Password is required" />
          )}
          {errors.password && errors.password.type === "minLength" && (
            <WarningMessage message="Password must be at least 8 characters long" />
          )}
        </div>
        <div className="d-flex justify-content-center w-100">
          <button type="submit" className="btn btn-primary">
            Вхід
          </button>
        </div>
      </form>
    </>
  );
};

export default SignInForm;
