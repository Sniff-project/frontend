const withInput = (WrappedInput, options = {}) => {
  const { className = "", template = 1 } = options;

  const componentClassName =
    `form-control input${template} ${className}`.trim();

  return (props) => {
    const newProps = {
      ...props,
      className: `${componentClassName} ${props.className || ""}`.trim(),
    };

    return <WrappedInput {...newProps} />;
  };
};

export default withInput;
