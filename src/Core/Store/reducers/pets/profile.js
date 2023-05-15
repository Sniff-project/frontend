import {
  PET_PROFILE_REQUEST,
  PET_PROFILE_SUCCESS,
  PET_PROFILE_FAILURE,
} from "@core/Store/actions/pets";

const initialState = {
  petProfile: null,
  isLoading: false,
  error: null,
};

export function petProfileReducer(state = initialState, action) {
  switch (action.type) {
    case PET_PROFILE_REQUEST:
      return { ...state, isLoading: true, error: null };
    case PET_PROFILE_SUCCESS:
      return {
        ...state,
        petProfile: action.payload.petProfile,
        isLoading: false,
        error: null,
      };
    case PET_PROFILE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
}
