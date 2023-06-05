import React from "react";
import { Spinner } from "@components/simple";
import { Message } from "@components/ordinary";
import { UserData } from "@components/smart/Profile";

const UserInfo = ({ profileState }) => {
  const { profile, isLoading, error } = profileState;

  const profileElem = profile?.id && !isLoading && (
    <UserData profileState={profileState} />
  );
  const loadingElem = (!profile?.id || isLoading) && <Spinner size={100} />;
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

export default UserInfo;
