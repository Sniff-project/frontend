import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@core/Hooks";
import { profile as getProfile } from "@core/Services/users";
import { Spinner } from "@components/simple";
import { Message } from "@components/ordinary";
import { UserData } from "@components/smart/Profile";

const Password = ({ profileState }) => {
  const { profile, isLoading, error } = profileState;
  // const { user, token } = useAuth();
  // const dispatch = useDispatch();
  // const profileState = useSelector((state) => state.profile);

  // useEffect(() => {
  //   if (user && token && !profileState.profile.email) {
  //     dispatch(
  //       getProfile({
  //         userId: user.sub,
  //         token: token,
  //       })
  //     );
  //   }
  // }, [dispatch, user, token, profileState.profile]);

  const profileElem = profile.id && !isLoading && (
    <UserData profileState={profileState} />
  );
  const loadingElem = (!profile.id || isLoading) && <Spinner size={100} />;
  const errorElem = error && !isLoading && (
    <Message
      message={error.message}
      messageType="error"
      margin={{ bottom: 8 }}
    />
  );

  return (
    <React.Fragment>
      {profileElem}
      {loadingElem}
      {errorElem}
    </React.Fragment>
  );
};

export default Password;
