import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { default as MButton } from "@mui/material/Button";

const Button = ({
  type = "button",
  className = "",
  color = "primary",
  onClick,
  children,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <StyledButton
      theme={theme}
      variant="contained"
      type={type}
      className={className}
      onClick={onClick}
      color={color}
      {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MButton)(({ theme, color }) => ({
  fontWeight: 300,
  fontSize: 24,
  textTransform: "none",
  lineHeight: "29px",
  color: "#fff",
  padding: "10px 89px 11px 89px",
  boxShadow:
    color === "primary"
      ? `0px 0px 36px ${theme.palette.primary.shadow}`
      : "none",
  borderRadius: 15,
  transition: "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",

  "&:hover": {
    backgroundColor: theme.palette.primary.hover,
    boxShadow: "none",
  },
}));

export default Button;
