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
      maxWidth: 560,
      borderRadius: 12,
      padding: "16px 22px 17px 20px",
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.main,
      borderColor: theme.main,
      boxShadow: `0px 0px 36px ${theme.shadow}`,
    }));

    return (
      <Zoom in={!isMessageHidden} mountOnEnter unmountOnExit>
        <MsgBox theme={palette} {...rest}>
          <InfoBox theme={palette}>
            <ReportProblemOutlinedIcon color={color} sx={{ fontSize: 21 }} />
          </InfoBox>
          <Box marginLeft="10px">
            <Typography variant="body1" p={{ color: color, fontSize: "16px" }}>
              {message}
            </Typography>
            <Zoom in={isMessageHidden} mountOnEnter unmountOnExit>
              <Typography />
            </Zoom>
          </Box>
          <IconButton onClick={handleClose} sx={{ marginLeft: "auto" }}>
            <CloseRoundedIcon color={color} sx={{ fontSize: 21 }} />
          </IconButton>
        </MsgBox>
      </Zoom>
    );
  }
);

const InfoBox = styled(Box)(({ theme }) => ({
  height: 34,
  width: 34,
  minWidth: 34,
  borderRadius: "50%",
  background: theme.textColor,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default Message;
