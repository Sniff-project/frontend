import React from "react";
import InputMask from "react-input-mask";
import { useFormContext, Controller } from "react-hook-form";
import "./styles.scss";

const Input = ({ name, className = "", validation = {}, mask, ...rest }) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  const { required, pattern, maxLength, minLength } = validation;

  const inputClassName = `form-control input1 ${className} ${
    errors[name] ? "errored" : ""
  }`.trim();

  const rules = {
    required: required && `Поле ${name} обов'язкове до заповнення!`,
    pattern: pattern && {
      value: pattern.value || pattern,
      message: pattern.message || `Поле ${name} не вірне`,
    },
    maxLength: maxLength && {
      value: maxLength.value || maxLength,
      message: maxLength.message || `Поле ${name} занадто довге`,
    },
    minLength: minLength && {
      value: minLength.value || minLength,
      message: minLength.message || `Поле ${name} занадто коротке`,
    },
  };

  return (
    <>
      {mask ? (
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <InputMask {...field} className={inputClassName} mask={mask} />
          )}
        />
      ) : (
        <input
          className={inputClassName}
          {...rest}
          {...register(name, rules)}
        />
      )}
      {errors?.[name]?.message && (
        <span className="error text-danger">{errors[name].message}</span>
      )}
    </>
  );
};

export default Input;
