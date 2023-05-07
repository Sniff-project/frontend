import { default as MGrid } from "@mui/material/Grid";

function Grid({ children, ...rest }) {
  return <MGrid {...rest}>{children}</MGrid>;
}

export default Grid;
