import {
  CREATE_PET_PROFILE_REQUEST,
  CREATE_PET_PROFILE_SUCCESS,
  CREATE_PET_PROFILE_FAILURE,
  CREATE_PET_PROFILE_RESET,
} from "@core/Store/actions/pets";

const initialState = {
  petProfile: null,
  isLoading: false,
  error: null,
};

export function createPetProfileReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PET_PROFILE_REQUEST:
      return { ...state, isLoading: true, error: null };
    case CREATE_PET_PROFILE_SUCCESS:
      return {
        ...state,
        petProfile: action.payload.petProfile,
        isLoading: false,
        error: null,
      };
    case CREATE_PET_PROFILE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case CREATE_PET_PROFILE_RESET:
      return initialState;
    default:
      return state;
  }
}
