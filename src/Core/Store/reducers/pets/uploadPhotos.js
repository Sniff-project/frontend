import {
  UPLOAD_PHOTOS_PET_PROFILE_REQUEST,
  UPLOAD_PHOTOS_PET_PROFILE_SUCCESS,
  UPLOAD_PHOTOS_PET_PROFILE_FAILURE,
} from "@core/Store/actions/pets";

const initialState = {
  photos: null,
  isLoading: false,
  error: null,
};

export function uploadPhotosPetProfileReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_PHOTOS_PET_PROFILE_REQUEST:
      return { ...state, isLoading: true, error: null };
    case UPLOAD_PHOTOS_PET_PROFILE_SUCCESS:
      return {
        ...state,
        photos: action.payload.photos,
        isLoading: false,
        error: null,
      };
    case UPLOAD_PHOTOS_PET_PROFILE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
}
