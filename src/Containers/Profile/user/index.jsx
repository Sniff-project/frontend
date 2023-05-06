import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { profile as getProfile } from "@core/Services/users";
import { Spinner } from "@components/simple";
import { ErrorMessage } from "@components/ordinary";

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
          <ErrorMessage message="Щось пішло не так :(" margin={{ bottom: 8 }} />
        )}
        {profileState.profile && (
          <div>
            <p>
              Name: {profileState.profile.firstname}{" "}
              {profileState.profile.lastname}
            </p>
            <p>Email: {profileState.profile.email}</p>
            <p>Phone: {profileState.profile.phone}</p>
            <p>Address: {profileState.profile.city}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Password;
