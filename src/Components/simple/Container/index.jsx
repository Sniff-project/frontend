import { memo } from "react";
import { default as MContainer } from "@mui/material/Container";

const Container = memo(({ children, ...rest }) => {
  return <MContainer {...rest}>{children}</MContainer>;
});

export default Container;
