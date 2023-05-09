import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from "@core/Store/actions/users";

const initialState = {
  success: null,
  isLoading: false,
  error: null,
};

export function changePasswordReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return { ...state, success: null, isLoading: true, error: null };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        success: action.payload.success,
        isLoading: false,
        error: null,
      };
    case CHANGE_PASSWORD_FAILURE:
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
