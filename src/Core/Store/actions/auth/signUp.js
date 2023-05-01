export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerRequest = () => {
  return { type: REGISTER_REQUEST };
};

export const registerSuccess = (token) => {
  return { type: REGISTER_SUCCESS, payload: { token } };
};

export const registerFailure = (error) => {
  return { type: REGISTER_FAILURE, payload: { error } };
};
