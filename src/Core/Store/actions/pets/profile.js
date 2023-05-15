export const PET_PROFILE_REQUEST = "PET_PROFILE_REQUEST";
export const PET_PROFILE_SUCCESS = "PET_PROFILE_SUCCESS";
export const PET_PROFILE_FAILURE = "PET_PROFILE_FAILURE";

export const petProfileRequest = () => {
  return { type: PET_PROFILE_REQUEST };
};

export const petProfileSuccess = (petProfile) => {
  return { type: PET_PROFILE_SUCCESS, payload: { petProfile } };
};

export const petProfileFailure = (error) => {
  return { type: PET_PROFILE_FAILURE, payload: { error } };
};
