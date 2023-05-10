import { memo } from "react";
import { default as MTab } from "@mui/material/Tab";

const Tab = memo(({ children, ...rest }) => {
  return <MTab {...rest}>{children}</MTab>;
});

export default Tab;
