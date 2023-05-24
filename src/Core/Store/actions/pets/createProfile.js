export const CREATE_PET_PROFILE_REQUEST = "CREATE_PET_PROFILE_REQUEST";
export const CREATE_PET_PROFILE_SUCCESS = "CREATE_PET_PROFILE_SUCCESS";
export const CREATE_PET_PROFILE_FAILURE = "CREATE_PET_PROFILE_FAILURE";
export const CREATE_PET_PROFILE_RESET = "CREATE_PET_PROFILE_RESET";

export const createPetProfileRequest = () => {
  return { type: CREATE_PET_PROFILE_REQUEST };
};

export const createPetProfileSuccess = (petProfile) => {
  return { type: CREATE_PET_PROFILE_SUCCESS, payload: { petProfile } };
};

export const createPetProfileFailure = (error) => {
  return { type: CREATE_PET_PROFILE_FAILURE, payload: { error } };
};

export const createPetProfileReset = () => {
  return { type: CREATE_PET_PROFILE_RESET };
};
