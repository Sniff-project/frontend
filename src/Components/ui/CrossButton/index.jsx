import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const CrossButton = ({
  title = "Закрити",
  placement = "top",
  fontSize = "small",
  ...props
}) => {
  return (
    <Tooltip title={title} placement={placement}>
      <IconButton aria-label={title} {...props}>
        <CloseRoundedIcon fontSize={fontSize} />
      </IconButton>
    </Tooltip>
  );
};

export default React.memo(CrossButton);
