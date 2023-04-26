import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Anchor({ href, text }) {
  return (
    <AnchorLink href={href}>
      {text}
    </AnchorLink>
  );
}
