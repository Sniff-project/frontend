import { default as MContainer } from "@mui/material/Container";

function Container({ children, ...rest }) {
  return <MContainer {...rest}>{children}</MContainer>;
}

export default Container;
