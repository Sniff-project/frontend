import React from "react";
import { default as MContainer } from "@mui/material/Container";

const Container = ({ children, ...props }) => {
  return (
    <MContainer
      sx={{
        margin: 0,
        padding: "0.625rem",
        maxWidth: "100%",
        "@media screen and (min-width: 600px)": {
          padding: "1.5rem",
          maxWidth: "100%",
        },
        "@media screen and (min-width: 960px)": {
          padding: "3.125rem",
          maxWidth: "100%",
        },
        "@media screen and (min-width: 1600px)": {
          maxWidth: "1600px",
          margin: "auto",
        },
      }}
      {...props}>
      {children}
    </MContainer>
  );
};

export default React.memo(Container);
