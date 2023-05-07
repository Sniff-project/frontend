import { default as MBox } from "@mui/material/Box";

function Box({ children, ...rest }) {
  return <MBox {...rest}>{children}</MBox>;
}

export default Box;
