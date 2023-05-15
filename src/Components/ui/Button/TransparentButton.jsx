import { forwardRef } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { default as MButton } from "@mui/material/Button";

const TButton = forwardRef(
  ({ type = "button", color = "primary", children, ...rest }, ref) => {
    const theme = useTheme();

    return (
      <StyledButton
        ref={ref}
        theme={theme}
        variant="contained"
        type={type}
        {...rest}>
        {children}
      </StyledButton>
    );
  }
);

const StyledButton = styled(MButton)(
  ({ theme }) => `
  background-color: transparent;
  box-shadow: none;
  border: none;
  color: ${theme.palette.black.main};

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    box-shadow: none;
    border: none;
    color: ${theme.palette.black.main};
  }
`
);

export default TButton;
