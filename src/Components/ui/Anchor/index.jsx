import React, { useEffect, useCallback } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { default as MLink } from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Anchor({
  href,
  text,
  className,
  color = "white",
  ...rest
}) {
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
      onClick={handleClick}
      {...rest}>
      {text}
    </StyledAnchor>
  );
}

const StyledAnchor = styled(MLink)(
  ({ theme }) => `
  & {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-transform: none;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
      color: ${theme.palette.primary.main};
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`
);
