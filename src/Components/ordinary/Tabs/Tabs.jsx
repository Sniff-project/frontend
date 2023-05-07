import { default as MTabs } from "@mui/material/Tabs";

function Tabs({ children, ...rest }) {
  return <MTabs {...rest}>{children}</MTabs>;
}

export default Tabs;
