import React, { useEffect, useCallback } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { default as MLink } from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Anchor({ href, text, className, color = "white" }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    const targetId = window.localStorage.getItem("targetId");
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      window.localStorage.removeItem("targetId");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = useCallback(
    (event) => {
      event.preventDefault();
      const targetId = href.substring(href.indexOf("#") + 1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        window.localStorage.setItem("targetId", targetId);
        const baseUrl = href.substring(0, href.indexOf("#"));
        navigate(baseUrl);
      }
    },
    [href, navigate]
  );

  return (
    <StyledAnchor
      theme={theme}
      color={color}
      to={href}
      className={className}
      onClick={handleClick}>
      {text}
    </StyledAnchor>
  );
}

const StyledAnchor = styled(MLink)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "20px",
  transition: "color 0.2s ease-in-out",
  textTransform: "none",
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));
