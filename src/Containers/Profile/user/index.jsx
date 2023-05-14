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
    if (user && token && !profileState.profile.email) {
      dispatch(
        getProfile({
          userId: user.sub,
          token: token,
        })
      );
    }
  }, [dispatch, user, token, profileState.profile]);

  const profile = profileState.profile.email && !profileState.isLoading && (
    <UserData profileState={profileState} />
  );
  const loading = (!profileState.profile.email || profileState.isLoading) && (
    <Spinner size={100} />
  );
  const error = profileState.error && !profileState.isLoading && (
    <Message
      message={profileState.error.message}
      messageType="error"
      margin={{ bottom: 8 }}
    />
  );

  return (
    <>
      <div>
        {profile}
        {loading}
        {error}
      </div>
    </>
  );
};

export default Password;
