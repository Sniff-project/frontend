export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";

export const changePasswordRequest = () => {
  return { type: CHANGE_PASSWORD_REQUEST };
};

export const changePasswordSuccess = (success) => {
  return { type: CHANGE_PASSWORD_SUCCESS, payload: { success } };
};

export const changePasswordFailure = (error) => {
  return { type: CHANGE_PASSWORD_FAILURE, payload: { error } };
};
