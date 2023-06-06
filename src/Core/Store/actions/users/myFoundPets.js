export const GET_USER_FOUND_PETS_REQUEST = "GET_USER_FOUND_PETS_REQUEST";
export const GET_USER_FOUND_PETS_SUCCESS = "GET_USER_FOUND_PETS_SUCCESS";
export const GET_USER_FOUND_PETS_FAILURE = "GET_USER_FOUND_PETS_FAILURE";
export const RESET_USER_FOUND_PETS = "RESET_USER_FOUND_PETS";

export const getUserFoundPetsRequest = () => {
  return { type: GET_USER_FOUND_PETS_REQUEST };
};

export const getUserFoundPetsSuccess = (petsList) => {
  return { type: GET_USER_FOUND_PETS_SUCCESS, payload: { petsList } };
};

export const getUserFoundPetsFailure = (error) => {
  return { type: GET_USER_FOUND_PETS_FAILURE, payload: { error } };
};

export const resetUserFoundPets = () => {
  return { type: RESET_USER_FOUND_PETS };
};
