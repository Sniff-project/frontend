import { memo } from "react";
import { default as MGrid } from "@mui/material/Grid";

const Grid = memo(({ children, ...rest }) => {
  return <MGrid {...rest}>{children}</MGrid>;
});

export default Grid;
