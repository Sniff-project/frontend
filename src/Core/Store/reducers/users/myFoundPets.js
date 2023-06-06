import {
  GET_USER_FOUND_PETS_REQUEST,
  GET_USER_FOUND_PETS_SUCCESS,
  GET_USER_FOUND_PETS_FAILURE,
  RESET_USER_FOUND_PETS,
} from "@core/Store/actions/users/myFoundPets";

const initialState = {
  petsList: [],
};

export function userFoundPetsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_FOUND_PETS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_USER_FOUND_PETS_SUCCESS:
      return {
        ...state,
        petsList: action.payload.petsList,
        isLoading: false,
        error: null,
      };
    case GET_USER_FOUND_PETS_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case RESET_USER_FOUND_PETS:
      return { ...initialState };
    default:
      return state;
  }
}
