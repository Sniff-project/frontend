import {
  STRANGER_PROFILE_REQUEST,
  STRANGER_PROFILE_SUCCESS,
  STRANGER_PROFILE_FAILURE,
  RESET_STRANGER_PROFILE,
} from "@core/Store/actions/users";

const initialState = {
  profile: {
    avatar: null,
    firstname: null,
    lastname: null,
    region: null,
    city: null,
    email: null,
    phone: null,
  },
  isLoading: false,
  error: null,
};

export function strangerProfileReducer(state = initialState, action) {
  switch (action.type) {
    case STRANGER_PROFILE_REQUEST:
      return { ...state, isLoading: true, error: null };
    case STRANGER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload.profile,
        isLoading: false,
        error: null,
      };
    case STRANGER_PROFILE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case RESET_STRANGER_PROFILE:
      return { ...initialState };
    default:
      return state;
  }
}
