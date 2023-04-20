import { useState } from "react";
import { useForm } from "react-hook-form";
import "./SignInForm.scss";

const SignInForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <form id="LoginForm" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          id="InputEmail"
          placeholder="Пошта або Номер телефону"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p>Please enter a valid email address</p>}
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
          <p>Password is required</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>Password must be at least 8 characters long</p>
        )}
      </div>
      <div className="d-flex justify-content-center w-100">
        <button type="submit" className="btn btn-primary">
          Вхід
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
