import { memo } from "react";
import { default as MBox } from "@mui/material/Box";

const Box = memo(({ children, ...rest }) => {
  return <MBox {...rest}>{children}</MBox>;
});

export default Box;
