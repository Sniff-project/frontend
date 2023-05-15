import React, { useCallback } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { default as MLink } from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Link = ({
  href,
  children,
  className = "",
  color = "black",
  sx,
  ...rest
}) => {
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
};

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
