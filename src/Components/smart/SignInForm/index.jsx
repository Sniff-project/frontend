import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { AuthContext } from "@contexts";
import { login as loginUser } from "@core/Services";
import { Button1, Input1 } from "@components/ui";
import { ErrorMessage, WarningMessage, Spinner } from "@components/simple";
import "./styles.scss";

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
    <form id="LoginForm" onSubmit={handleSubmit(onSubmitHandler)}>
      {authState.isLoading && <Spinner size={100} />}
      {authState.error && <ErrorMessage message={authState.error} />}
      <div className="form-group">
        <Input1
          type="email"
          name="email"
          placeholder="Пошта або Номер телефону"
          validation={{
            required: true,
            pattern: /^[a-z0-9]+@[a-z0-9]{4,}\.[a-z]{2,3}(\.[a-z]{2,3}){0,1}$/i,
          }}
          formData={formData}
          register={register}
          onChange={handleInputChange}
        />
        {errors.email && (
          <WarningMessage message="Please enter a valid email address" />
        )}
      </div>
      <div className="form-group">
        <Input1
          type="password"
          name="password"
          className="mt-8"
          placeholder="Пароль"
          validation={{ required: true, minLength: 6 }}
          formData={formData}
          register={register}
          onChange={handleInputChange}
        />
        {errors.password && errors.password.type === "required" && (
          <WarningMessage message="Password is required" />
        )}
        {errors.password && errors.password.type === "minLength" && (
          <WarningMessage message="Password must be at least 6 characters long" />
        )}
      </div>
      <div className="d-flex justify-content-center w-100">
        <Button1 type="submit" className="mt-10">
          Вхід
        </Button1>
      </div>
    </form>
  );
};

export default SignInForm;
