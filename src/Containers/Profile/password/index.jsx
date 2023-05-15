import React, { memo, useContext, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "@contexts";
import { changePassword } from "@core/Services/users";
import { Spinner } from "@components/simple";
import { Message } from "@components/ordinary";
import { ChangePasswordForm } from "@components/smart/Profile";
import "./styles.scss";

const Password = memo(() => {
  const theme = useTheme();
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const changePasswordState = useSelector((state) => state.changePassword);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = useCallback(
    (data) => {
      const sendData = { userId: user.sub, token: token, ...data };
      dispatch(changePassword(sendData));
    },
    [user, token, dispatch]
  );

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div id="changePassword">
      <Grid
        container
        sx={{
          position: "relative",
          background: theme.palette.background.blue,
          borderRadius: "1.875rem",
          padding: "2.5rem 6.25rem 5.375rem 6.25rem",
          margin: "auto",
          maxWidth: "500px",
        }}>
        <Typography variant="h2" sx={{ textAlign: "center", width: "100%" }}>
          Змінити пароль
        </Typography>
        {changePasswordState.isLoading && <Spinner size={100} />}
        {changePasswordState.error && (
          <Message
            message={changePasswordState.error.message}
            messageType="error"
            mt={4}
          />
        )}
        {changePasswordState.success && (
          <Message
            message={changePasswordState.success.message}
            messageType="success"
            mt={4}
          />
        )}
        <ChangePasswordForm
          onSubmit={onSubmitHandler}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
      </Grid>
    </div>
  );
});

export default Password;
