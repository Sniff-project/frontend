import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Anchor({ href, text, className, color = "white" }) {
  const anchorClassName = `text-${color} ${className}`;

  return (
    <AnchorLink href={href} className={anchorClassName}>
      {text}
    </AnchorLink>
  );
}
