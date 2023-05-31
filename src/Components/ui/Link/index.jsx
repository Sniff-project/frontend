import React, { useCallback, forwardRef } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { default as MLink } from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Link = forwardRef(
  ({ href, children, className = "", color = "black", sx, ...rest }, ref) => {
    const theme = useTheme();

    const navigate = useNavigate();

    const handleClick = useCallback(
      (event) => {
        event.preventDefault();
        navigate(href);
      },
      [navigate, href]
    );

    return (
      <StyledLink
        ref={ref}
        theme={theme}
        color={color}
        href={href}
        className={className}
        onClick={handleClick}
        sx={sx}
        {...rest}>
        {children}
      </StyledLink>
    );
  }
);

const StyledLink = styled(MLink)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "1.25rem",
  textTransform: "none",
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

export default React.memo(Link);
