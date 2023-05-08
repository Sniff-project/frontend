import { useState, useCallback } from "react";
import { useTheme } from "@mui/material/styles";

const withMessage = (WrappedComponent) => {
  return ({ messageType, isShown = true, ...rest }) => {
    const theme = useTheme();
    const [isMessageHidden, setMessageHidden] = useState(!isShown);

    const palette = theme.palette[messageType];

    console.log(rest);

    const handleClose = useCallback(() => {
      setMessageHidden(true);
    }, []);

    return (
      <>
        <WrappedComponent
          palette={palette}
          onClose={handleClose}
          isMessageHidden={isMessageHidden}
          {...rest}
        />
      </>
    );
  };
};

export default withMessage;
