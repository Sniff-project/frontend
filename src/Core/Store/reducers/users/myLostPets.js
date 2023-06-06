import {
  GET_USER_LOST_PETS_REQUEST,
  GET_USER_LOST_PETS_SUCCESS,
  GET_USER_LOST_PETS_FAILURE,
  RESET_USER_LOST_PETS,
} from "@core/Store/actions/users/myLostPets";

const initialState = {
  petsList: [],
};

export function userLostPetsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_LOST_PETS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_USER_LOST_PETS_SUCCESS:
      return {
        ...state,
        petsList: action.payload.petsList,
        isLoading: false,
        error: null,
      };
    case GET_USER_LOST_PETS_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case RESET_USER_LOST_PETS:
      return { ...initialState };
    default:
      return state;
  }
}
