import React, { memo, useContext, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { changePassword } from "@core/Services/users";
import { Spinner } from "@components/simple";
import { ErrorMessage } from "@components/ordinary";
import { ChangePasswordForm } from "@components/smart/Profile";
import "./styles.scss";

const Password = memo(() => {
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const changePasswordState = useSelector((state) => state.changePassword);

  const onSubmitHandler = useCallback(
    (data) => {
      const sendData = { userId: user.sub, token: token, ...data };
      dispatch(changePassword(sendData));
    },
    [user, token, dispatch]
  );

  return (
    <div id="changePassword">
      <div className="pwd__container">
        <h3 className="pwd__title mb-9">Змінити пароль</h3>
        {changePasswordState.isLoading && <Spinner size={100} />}
        {changePasswordState.error && (
          <ErrorMessage
            message={
              changePasswordState.error.message || "Щось пішло не так :("
            }
            margin={{ bottom: 8 }}
          />
        )}
        {changePasswordState.success}
        <ChangePasswordForm onSubmit={onSubmitHandler} />
      </div>
    </div>
  );
});

export default Password;
