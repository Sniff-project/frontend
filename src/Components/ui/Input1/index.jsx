import React from "react";
import "./styles.scss";

const Input = ({
  id,
  name,
  className = "",
  validation = {},
  formData,
  register,
  value = "",
  ...rest
}) => {
  const inputId = id || `Input${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  const inputClassName = `form-control input1 ${className}`.trim();

  return (
    <input
      id={inputId}
      name={name}
      className={inputClassName}
      {...(formData ? register(name, validation) : {})}
      value={formData ? formData[name] : value}
      {...rest}
    />
  );
};

export default Input;
