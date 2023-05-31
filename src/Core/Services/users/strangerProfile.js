import {
  strangerProfileRequest,
  strangerProfileSuccess,
  strangerProfileFailure,
} from "@core/Store/actions/users";

import { getProfile } from "@core/API/users";

const successMsg = "Профіль завантажено!";
const errorMsg = "Користувач не знайдений!";
const unknownError = "Щось пішло не так :(";

export const strangerProfile = ({ userId }) => {
  return async (dispatch) => {
    try {
      dispatch(strangerProfileRequest());
      const response = await getProfile({ userId });
      if (response.status === 200) {
        const result = {
          ...response.data,
          message: successMsg,
        };
        dispatch(strangerProfileSuccess(result));
      } else {
        // error 404 or others
        const result = {
          ...response.data,
          message: errorMsg,
        };
        dispatch(strangerProfileFailure(result));
      }
    } catch (error) {
      // unexpected errors
      const result = {
        ...error,
        message: unknownError,
      };
      dispatch(strangerProfileFailure(result));
      throw error;
    }
  };
};
