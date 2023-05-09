import React, { memo, useContext, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { changePassword } from "@core/Services/users";
import { Spinner } from "@components/simple";
import { Message } from "@components/ordinary";
import { ChangePasswordForm } from "@components/smart/Profile";
import "./styles.scss";

const Password = memo(() => {
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
      <div className="pwd__container">
        <h3 className="pwd__title mb-9">Змінити пароль</h3>
        {changePasswordState.isLoading && <Spinner size={100} />}
        {changePasswordState.error && (
          <Message
            message={
              changePasswordState.error.message || "Щось пішло не так :("
            }
            messageType="error"
            mt={4}
          />
        )}
        {changePasswordState.success && (
          <Message
            message={changePasswordState.success}
            messageType="success"
            mt={4}
          />
        )}
        <ChangePasswordForm
          onSubmit={onSubmitHandler}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
      </div>
    </div>
  );
});

export default Password;
