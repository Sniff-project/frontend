import { memo, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { TextField, InputAdornment, IconButton } from "@mui/material";

const TextArea = memo(
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

    return (
      <>
        <TextField
          variant={variant}
          label={inpLabel}
          error={!!errors?.[name] && true}
          helperText={errors?.[name]?.message || ""}
          name={name}
          className={className}
          InputProps={inpProps}
          {...rest}
          {...register(name, rules)}
        />
      </>
    );
  }
);

export default TextArea;
