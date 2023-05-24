import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const EditButton = ({ fontSize = "small", ...props }) => {
  return (
    <Tooltip title="Редагувати" placement="top">
      <IconButton
        aria-label="Редагувати"
        sx={{ marginTop: "0.25rem" }}
        {...props}>
        <EditRoundedIcon fontSize={fontSize} />
      </IconButton>
    </Tooltip>
  );
};

export default React.memo(EditButton);
