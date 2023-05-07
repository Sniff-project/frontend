import { default as MTab } from "@mui/material/Tab";

function Tab({ children, ...rest }) {
  return <MTab {...rest}>{children}</MTab>;
}

export default Tab;
