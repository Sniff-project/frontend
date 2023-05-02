export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILURE = "PROFILE_FAILURE";

export const profileRequest = () => {
  return { type: PROFILE_REQUEST };
};

export const profileSuccess = (profile) => {
  return { type: PROFILE_SUCCESS, payload: { profile } };
};

export const profileFailure = (error) => {
  return { type: PROFILE_FAILURE, payload: { error } };
};
