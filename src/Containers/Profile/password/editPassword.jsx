import React, { useContext, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { changePassword } from "@core/Services/users";
import { Button1 } from "@components/ui";
import { Spinner } from "@components/simple";
import { ErrorMessage } from "@components/ordinary";

const EditPasswd = () => {
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const changePasswordState = useSelector((state) => state.changePassword);
  const currPasswd = useRef(null);
  const newPasswd = useRef(null);

  const onClickHandler = useCallback(() => {
    if (user && token) {
      const data = {
        userId: user.sub,
        token: token,
        currentPassword: currPasswd.current.value,
        newPassword: newPasswd.current.value,
      };
      console.log(data);
      dispatch(changePassword(data));
    }
  }, [user, token, currPasswd, newPasswd, dispatch]);

  console.log(changePasswordState);

  return (
    <div>
      {changePasswordState.isLoading && <Spinner size={100} />}
      {changePasswordState.error && (
        <ErrorMessage
          message={changePasswordState.error.message || "Щось пішло не так :("}
          margin={{ bottom: 8 }}
        />
      )}
      <input placeholder="old pass" ref={currPasswd} />
      <input placeholder="new pass" ref={newPasswd} />
      <Button1 onClick={onClickHandler}>Update</Button1>
      {changePasswordState.success}
    </div>
  );
};

export default EditPasswd;
