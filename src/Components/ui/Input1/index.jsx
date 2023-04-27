import React from "react";
import InputMask from "react-input-mask";
import "./styles.scss";

const Input = ({
  id,
  name,
  className = "",
  validation = {},
  formData = null,
  register = null,
  value = "",
  mask = null,
  ...rest
}) => {
  const inputId = id || `Input${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  const inputClassName = `form-control input1 ${className}`.trim();

  const validate = formData ? register(name, validation) : {};
  const val = formData ? formData[name] : value;

  const inputProps = {
    id: inputId,
    name,
    className: inputClassName,
    ...validate,
    value: val,
    ...rest,
  };

  if (mask) {
    return <InputMask {...inputProps} mask={mask} />;
  }

  return <input {...inputProps} />;
};

export default Input;
