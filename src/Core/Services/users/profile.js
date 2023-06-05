import {
  profileRequest,
  profileSuccess,
  profileFailure,
  resetProfile as reset,
} from "@core/Store/actions/users";

import { getProfile } from "@core/API/users";

const successMsg = "Профіль завантажено!";
const errorMsg = "Сесія вичерпана!";
const unknownError = "Щось пішло не так :(";

export const profile = ({ userId, token }) => {
  return async (dispatch) => {
    try {
      dispatch(profileRequest());
      const response = await getProfile({ userId, token });
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

export const resetProfile = () => {
  return async (dispatch) => {
    dispatch(reset());
  };
};
