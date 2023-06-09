import {
  EDIT_PET_PROFILE_REQUEST,
  EDIT_PET_PROFILE_SUCCESS,
  EDIT_PET_PROFILE_FAILURE,
  RESET_PET_PROFILE_EDIT,
} from "@core/Store/actions/pets/editProfile";

const initialState = {
  petProfile: null,
  isLoading: false,
  error: null,
};

export function editPetProfileReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_PET_PROFILE_REQUEST:
      return { ...state, isLoading: true, error: null };
    case EDIT_PET_PROFILE_SUCCESS:
      return {
        ...state,
        petProfile: action.payload.petProfile,
        isLoading: false,
        error: null,
      };
    case EDIT_PET_PROFILE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case RESET_PET_PROFILE_EDIT:
      return { ...initialState };
    default:
      return state;
  }
}
