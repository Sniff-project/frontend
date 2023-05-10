import {
  UPLOAD_AVATAR_REQUEST,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
} from "@core/Store/actions/users";

const initialState = {
  success: null,
  isLoading: false,
  error: null,
};

export function uploadAvatarReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_AVATAR_REQUEST:
      return { ...state, success: null, isLoading: true, error: null };
    case UPLOAD_AVATAR_SUCCESS:
      return {
        ...state,
        success: action.payload.success,
        isLoading: false,
        error: null,
      };
    case UPLOAD_AVATAR_FAILURE:
      return {
        ...state,
        success: null,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
