export const STRANGER_PROFILE_REQUEST = "STRANGER_PROFILE_REQUEST";
export const STRANGER_PROFILE_SUCCESS = "STRANGER_PROFILE_SUCCESS";
export const STRANGER_PROFILE_FAILURE = "STRANGER_PROFILE_FAILURE";
export const RESET_STRANGER_PROFILE = "RESET_STRANGER_PROFILE";

export const strangerProfileRequest = () => {
  return { type: STRANGER_PROFILE_REQUEST };
};

export const strangerProfileSuccess = (profile) => {
  return { type: STRANGER_PROFILE_SUCCESS, payload: { profile } };
};

export const strangerProfileFailure = (error) => {
  return { type: STRANGER_PROFILE_FAILURE, payload: { error } };
};

export const resetStrangerProfile = () => {
  return { type: RESET_STRANGER_PROFILE };
};
