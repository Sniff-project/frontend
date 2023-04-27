import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Anchor({ href, text, className, color = "white" }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const anchorClassName = `text-${color} ${className}`;

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.length > 0) {
      const targetElement = document.getElementById(hash.slice(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = href.substring(href.indexOf("#") + 1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(href);
    }
  };

  return (
    <Link to={href} className={anchorClassName} onClick={handleClick}>
      {text}
    </Link>
  );
}
