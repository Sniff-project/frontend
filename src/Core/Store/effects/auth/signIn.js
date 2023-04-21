import { Dispatch } from "redux";
import { loginRequest, loginSuccess, loginFailure } from "@core/Store/actions";

import { signIn } from "@core/API/auth";

export const login = (email, password) => {
  console.log(email, password);
  return async (dispatch: Dispatch) => {
    try {
      dispatch(loginRequest());
      const response = await signIn(email, password);
      if (response.Response === "True") {
        dispatch(loginSuccess(response));
      } else {
        dispatch(loginFailure(response.Error));
      }
    } catch (error) {
      dispatch(loginFailure("An error occurred while logging"));
    }
  };
};
