import { useState, useCallback, memo } from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Box, IconButton, Typography, Zoom } from "@mui/material";

import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const ErrorMessage = memo(
  ({ color = "white", message, error = true, ...rest }) => {
    const theme = useTheme();

    const [isErrorHidden, setErrorHidden] = useState(!error);

    const handleClose = useCallback(() => {
      setErrorHidden(true);
    }, [setErrorHidden]);

    const ErrorBox = styled(Box)(({ theme }) => ({
      width: "auto",
      maxWidth: 560,
      borderRadius: 12,
      padding: "16px 22px 17px 20px",
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.palette.error.main,
      borderColor: theme.palette.error.main,
      boxShadow: `0px 0px 36px ${theme.palette.error.shadow}`,
    }));

    return (
      <Zoom in={!isErrorHidden} mountOnEnter unmountOnExit>
        <ErrorBox theme={theme} {...rest}>
          <InfoBox theme={theme}>
            <WarningIcon color={color} />
          </InfoBox>
          <Box marginLeft="10px">
            <Typography variant="body1" p={{ color: color, fontSize: "16px" }}>
              {message}
            </Typography>
            <Zoom in={isErrorHidden} mountOnEnter unmountOnExit>
              <Typography />
            </Zoom>
          </Box>
          <CloseButton onClick={handleClose}>
            <CloseIcon color={color} />
          </CloseButton>
        </ErrorBox>
      </Zoom>
    );
  }
);

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
