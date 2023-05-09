export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const logoutRequest = () => {
  return { type: LOGOUT_REQUEST };
};

export const logoutSuccess = (success) => {
  return { type: LOGOUT_SUCCESS, payload: { success } };
};

export const logoutFailure = (error) => {
  return { type: LOGOUT_FAILURE, payload: { error } };
};
