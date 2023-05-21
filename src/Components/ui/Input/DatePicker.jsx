import { useMemo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import styled from "@mui/system/styled";
import useTheme from "@mui/material/styles/useTheme";
import dayjs from "dayjs";
import "dayjs/locale/uk";

const CustomDatePicker = ({
  name,
  views = ["year", "month", "day"],
  slotProps = { textField: { variant: "filled" } },
  defaultValue,
  validation,
  ...rest
}) => {
  const theme = useTheme();
  const { control } = useFormContext();

  const rules = useMemo(() => validation, [validation]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field: { ref, name, value, ...field }, fieldState }) => (
          <SDatePicker
            {...field}
            inputRef={ref}
            theme={theme}
            views={views}
            slotProps={slotProps}
            value={value ? dayjs(value) : null}
            renderInput={(inputProps) => (
              <TextField
                {...inputProps}
                name={name}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
            {...rest}
          />
        )}
      />
    </LocalizationProvider>
  );
};

const SDatePicker = styled(DatePicker)(({ theme }) => ({
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
  "& input": {
    paddingTop: "4px",
    paddingRight: 0,
    paddingBottom: "5px",
  },
  "& label": {
    transform: "translate(0, 20px) scale(1)",
  },
  '& label[data-shrink="true"]': {
    transform: "translate(0, -1.5px) scale(0.75)",
  },

  "& label.Mui-focused": {
    paddingLeft: 0,
  },
  "& .MuiInputBase-root": {
    marginTop: "16px",
    background: "none",
    "&.Mui-focused, &:hover, &:active": {
      background: "none",
    },
  },
}));
export default CustomDatePicker;
