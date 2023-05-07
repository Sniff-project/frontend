import React, { useMemo, useCallback } from "react";
import InputMask from "react-input-mask";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
// import "./styles.scss";
// import "./styles2.scss";

const Input = React.memo(
  ({
    name,
    label = null,
    className = "form-control input1",
    validation = {},
    variant = "standard",
    mask,
    ...rest
  }) => {
    const {
      register,
      formState: { errors },
      control,
    } = useFormContext();
    const { required, pattern, maxLength, minLength, validate } = validation;

    const inpLabel = label || name;

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
        <InputMask {...field} {...rest} className={className} mask={mask}>
          {(inputProps) => (
            <TextField
              {...inputProps}
              variant={variant}
              label={inpLabel}
              error={!!errors?.[name] && true}
              helperText={errors?.[name]?.message || ""}
            />
          )}
        </InputMask>
      ),
      [rest, className, mask, inpLabel, errors, name, variant]
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
          <TextField
            variant={variant}
            label={inpLabel}
            error={!!errors?.[name] && true}
            helperText={errors?.[name]?.message || ""}
            name={name}
            className={className}
            {...rest}
            {...register(name, rules)}
          />
        )}
      </>
    );
  }
);

export default Input;
