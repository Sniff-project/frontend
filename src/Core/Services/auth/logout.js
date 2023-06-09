import {
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  resetProfile,
} from "@core/Store/actions";

const successMsg = "Ви вийшли з аккаунта!";
const unknownError = "Щось пішло не так :(";

export const logout = (auth) => {
  return (dispatch) => {
    try {
      dispatch(logoutRequest());
      dispatch(resetProfile());
      auth.logout();
      const result = {
        message: successMsg,
      };
      dispatch(logoutSuccess(result));
    } catch (error) {
      const result = {
        ...error,
        message: unknownError,
      };
      dispatch(logoutFailure(result));
      throw error;
    }
  };
};
