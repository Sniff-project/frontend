import { memo, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import styled from "@mui/system/styled";
import useTheme from "@mui/material/styles/useTheme";

const SelectInput = ({
  name,
  variant = "standard",
  validation,
  children,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const theme = useTheme();
  const rules = useMemo(
    () => ({
      ...validation,
    }),
    [validation]
  );

  return (
    <SInput
      theme={theme}
      select
      variant={variant}
      error={!!errors?.[name]}
      helperText={errors?.[name]?.message || ""}
      {...rest}
      {...register(name, rules)}>
      {children}
    </SInput>
  );
};

const SInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& label, & input": {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    color: "rgba(0, 0, 0, 0.5)",
    paddingLeft: 10,
    height: "auto",
    transition: theme.transitions.create(
      ["color", "transform", "max-width", "padding"],
      {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeInOut,
      }
    ),
  },
  "& label.Mui-focused": {
    paddingLeft: 0,
  },
  "& .MuiInput-root:before": {
    borderBottom: `1px solid ${theme.palette.black.opacity025}`,
  },
  "& .MuiInput-root.Mui-error:before": {
    borderBottom: `1px solid ${theme.palette.error.main}`,
  },
  "& .MuiSelect-select": {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    color: "rgba(0, 0, 0, 0.5)",
    paddingLeft: 10,
  },
}));

export default memo(SelectInput);
