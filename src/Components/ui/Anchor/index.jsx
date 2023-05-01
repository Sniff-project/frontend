import React, { useEffect, useCallback } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Anchor({ href, text, className, color = "white" }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const anchorClassName = `text-${color} ${className}`;

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
    <Link to={href} className={anchorClassName} onClick={handleClick}>
      {text}
    </Link>
  );
}
