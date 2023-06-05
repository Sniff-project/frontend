export const GET_USER_LOST_PETS_REQUEST = "GET_USER_LOST_PETS_REQUEST";
export const GET_USER_LOST_PETS_SUCCESS = "GET_USER_LOST_PETS_SUCCESS";
export const GET_USER_LOST_PETS_FAILURE = "GET_USER_LOST_PETS_FAILURE";
export const RESET_USER_LOST_PETS = "RESET_USER_LOST_PETS";

export const getUserLostPetsRequest = () => {
  return { type: GET_USER_LOST_PETS_REQUEST };
};

export const getUserLostPetsSuccess = (petsList) => {
  return { type: GET_USER_LOST_PETS_SUCCESS, payload: { petsList } };
};

export const getUserLostPetsFailure = (error) => {
  return { type: GET_USER_LOST_PETS_FAILURE, payload: { error } };
};

export const resetUserLostPets = () => {
  return { type: RESET_USER_LOST_PETS };
};
