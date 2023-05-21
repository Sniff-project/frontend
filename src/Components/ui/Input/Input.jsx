import { memo, useMemo, useCallback } from "react";
import InputMask from "react-input-mask";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, InputAdornment, IconButton } from "@mui/material";

const Input = memo(
  ({
    name,
    label = null,
    className = "",
    validation = {},
    variant = "standard",
    mask,
    startIcon = null,
    startIconOnClick = null,
    endIcon = null,
    endIconOnClick = null,
    readOnly = false,
    ...rest
  }) => {
    const {
      register,
      formState: { errors },
      control,
    } = useFormContext();
    const { required, pattern, maxLength, minLength, validate } = validation;

    const inpLabel = label || name;

    const inpProps = useMemo(
      () => ({
        startAdornment: startIcon && (
          <InputAdornment position="start">
            <IconButton onClick={startIconOnClick}>{startIcon}</IconButton>
          </InputAdornment>
        ),
        endAdornment: endIcon && (
          <InputAdornment position="end">
            <IconButton onClick={endIconOnClick}>{endIcon}</IconButton>
          </InputAdornment>
        ),
        readOnly,
      }),
      [startIcon, endIcon, startIconOnClick, endIconOnClick, readOnly]
    );

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
              error={!!errors?.[name]}
              helperText={errors?.[name]?.message}
              InputProps={inpProps}
            />
          )}
        </InputMask>
      ),
      [rest, className, mask, inpLabel, errors, name, variant, inpProps]
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
            error={!!errors?.[name]}
            helperText={errors?.[name]?.message}
            name={name}
            className={className}
            InputProps={inpProps}
            {...rest}
            {...register(name, rules)}
          />
        )}
      </>
    );
  }
);

export default Input;
