import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function CustomSnackbar({
  autoHideDuration = 5000,
  message,
  open = true,
  severity = "success",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      {...props}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
