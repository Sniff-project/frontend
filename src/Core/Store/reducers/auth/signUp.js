import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "@core/Store/actions";

const initialState = {
  token: null,
  isLoading: false,
  error: null,
};

export function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
        error: null,
      };
    case REGISTER_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
}
