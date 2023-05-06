import React, { useMemo, useCallback } from "react";
import InputMask from "react-input-mask";
import { useFormContext, Controller } from "react-hook-form";
import "./styles.scss";
import "./styles2.scss";

const Input = React.memo(
  ({
    name,
    className = "form-control input1",
    validation = {},
    mask,
    ...rest
  }) => {
    const {
      register,
      formState: { errors },
      control,
    } = useFormContext();
    const { required, pattern, maxLength, minLength, validate } = validation;

    const inputClassName = `${className} ${
      errors[name] ? "errored" : ""
    }`.trim();

    const rules = useMemo(
      () => ({
        required: required || `Поле ${name} обов'язкове до заповнення!`,
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
        validate: validate || false,
      }),
      [name, required, pattern, maxLength, minLength, validate]
    );

    const render = useCallback(
      ({ field }) => (
        <InputMask
          {...field}
          {...rest}
          className={inputClassName}
          mask={mask}
        />
      ),
      [rest, inputClassName, mask]
    );

    return (
      <>
        {mask ? (
          <Controller
            name={name}
            control={control}
            defaultValue=""
            rules={rules}
            render={render}
          />
        ) : (
          <input
            name={name}
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
  }
);

export default Input;
