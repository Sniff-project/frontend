import React, { useState, useCallback } from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Box, IconButton, Typography } from "@mui/material";

import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const ErrorMessage = ({
  color = "white",
  message,
  margin = {},
  error = true,
}) => {
  const theme = useTheme();

  const { top = 0, right = 0, bottom = 0, left = 0 } = margin;
  const [isErrorHidden, setErrorHidden] = useState(!error);

  const handleClose = useCallback(() => {
    setErrorHidden(true);
  }, []);

  const ErrorBox = styled(Box)(({ theme }) => ({
    maxWidth: 560,
    width: "100%",
    borderRadius: 12,
    padding: "16px 22px 17px 20px",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.error.main,
    borderColor: theme.palette.error.main,
    boxShadow: `0px 0px 36px ${theme.palette.error.shadow}`,
    margin: `${top}px ${right}px ${bottom}px ${left}px`,
  }));

  return (
    <>
      {!isErrorHidden && (
        <ErrorBox theme={theme}>
          <InfoBox theme={theme}>
            <WarningIcon color={color} />
          </InfoBox>
          <Box marginLeft="10px">
            <Typography variant="body1" p={{ color: color, fontSize: "16px" }}>
              {message}
            </Typography>
          </Box>
          <CloseButton onClick={handleClose}>
            <CloseIcon color={color} />
          </CloseButton>
        </ErrorBox>
      )}
    </>
  );
};

const InfoBox = styled(Box)(({ theme }) => ({
  height: 34,
  width: 34,
  minWidth: 34,
  borderRadius: "50%",
  background: theme.palette.white.opacity,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const WarningIcon = styled(ReportProblemOutlinedIcon)({
  fontSize: "21px",
});

const CloseButton = styled(IconButton)({
  marginLeft: "auto",
});

const CloseIcon = styled(CloseRoundedIcon)({
  fontSize: 21,
});

export default ErrorMessage;
