import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { profile as getProfile } from "@core/Services/users";
import { Spinner } from "@components/simple";
import { Message } from "@components/ordinary";
import { UserData } from "@components/smart/Profile";

const Password = () => {
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile);

  useEffect(() => {
    if (user && token) {
      dispatch(
        getProfile({
          userId: user.sub,
          token: token,
        })
      );
    }
  }, [dispatch, user, token]);

  return (
    <>
      <div>
        {profileState.isLoading && <Spinner size={100} />}
        {profileState.error && (
          <Message
            message="Щось пішло не так :("
            messageType="error"
            margin={{ bottom: 8 }}
          />
        )}
        {(profileState.profile && !profileState.isLoading) && (
          <UserData profileState={profileState}/>
        )}
      </div>
    </>
  );
};

export default Password;
