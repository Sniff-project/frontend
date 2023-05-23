import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

const SaveButton = ({ fontSize = "small", ...props }) => {
  return (
    <Tooltip title="Зберегти" placement="top">
      <IconButton aria-label="Зберегти" {...props}>
        <SaveRoundedIcon fontSize={fontSize} />
      </IconButton>
    </Tooltip>
  );
};

export default React.memo(SaveButton);
