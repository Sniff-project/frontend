import { memo, useState, useCallback } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { Box, IconButton, Typography, Zoom } from "@mui/material";

import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Message = memo(
  ({ color = "white", message, messageType, isShown = true, ...rest }) => {
    const theme = useTheme();
    const [isMessageHidden, setMessageHidden] = useState(!isShown);

    const palette = theme.palette[messageType];

    const handleClose = useCallback(() => {
      setMessageHidden(true);
    }, []);

    const MsgBox = styled(Box)(({ theme }) => ({
      width: "auto",
      maxWidth: "35rem",
      borderRadius: 12,
      padding: "1rem 1.375rem 1.0625rem 1.25rem",
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.main,
      borderColor: theme.main,
      boxShadow: `0 0 2.25rem ${theme.shadow}`,
    }));

    return (
      <Zoom in={!isMessageHidden} mountOnEnter unmountOnExit>
        <MsgBox theme={palette} {...rest}>
          <InfoBox theme={palette}>
            <ReportProblemOutlinedIcon
              color={color}
              sx={{ fontSize: "1.25rem" }}
            />
          </InfoBox>
          <Box marginLeft="0.625rem">
            <Typography variant="body1" p={{ color: color, fontSize: "1rem" }}>
              {message}
            </Typography>
            <Zoom in={isMessageHidden} mountOnEnter unmountOnExit>
              <Typography />
            </Zoom>
          </Box>
          <IconButton onClick={handleClose} sx={{ marginLeft: "auto" }}>
            <CloseRoundedIcon color={color} sx={{ fontSize: "1.25rem" }} />
          </IconButton>
        </MsgBox>
      </Zoom>
    );
  }
);

const InfoBox = styled(Box)(({ theme }) => ({
  height: "2.125rem",
  width: "2.125rem",
  minWidth: "2.125rem",
  borderRadius: "50%",
  background: theme.textColor,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default Message;
