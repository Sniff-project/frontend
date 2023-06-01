export const EDIT_PET_PROFILE_REQUEST = "EDIT_PET_PROFILE_REQUEST";
export const EDIT_PET_PROFILE_SUCCESS = "EDIT_PET_PROFILE_SUCCESS";
export const EDIT_PET_PROFILE_FAILURE = "EDIT_PET_PROFILE_FAILURE";
export const RESET_PET_PROFILE_EDIT = "RESET_PET_PROFILE_EDIT";

export const editPetProfileRequest = () => {
  return { type: EDIT_PET_PROFILE_REQUEST };
};

export const editPetProfileSuccess = (petProfile) => {
  return { type: EDIT_PET_PROFILE_SUCCESS, payload: { petProfile } };
};

export const editPetProfileFailure = (error) => {
  return { type: EDIT_PET_PROFILE_FAILURE, payload: { error } };
};

export const resetPetProfileEdit = () => {
  return { type: RESET_PET_PROFILE_EDIT };
};
