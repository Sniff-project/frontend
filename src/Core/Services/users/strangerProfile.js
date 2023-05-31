import {
  profileRequest,
  profileSuccess,
  profileFailure,
} from "@core/Store/actions/users";

import { getProfile } from "@core/API/users";

const successMsg = "Профіль завантажено!";
const errorMsg = "Користувач не знайдений!";
const unknownError = "Щось пішло не так :(";

export const strangerProfile = ({ userId }) => {
  return async (dispatch) => {
    try {
      dispatch(profileRequest());
      const response = await getProfile({ userId });
      if (response.status === 200) {
        const result = {
          ...response.data,
          message: successMsg,
        };
        dispatch(profileSuccess(result));
      } else {
        // error 404 or others
        const result = {
          ...response.data,
          message: errorMsg,
        };
        dispatch(profileFailure(result));
      }
    } catch (error) {
      // unexpected errors
      const result = {
        ...error,
        message: unknownError,
      };
      dispatch(profileFailure(result));
      throw error;
    }
  };
};
