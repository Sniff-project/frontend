import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./style.scss";

export default function Anchor({ href, text }) {
  return (
    <AnchorLink className="nav-menu__link" href={href}>
      {text}
    </AnchorLink>
  );
}
