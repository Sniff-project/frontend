import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
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

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_REQUEST:
      return { ...state, isLoading: true, error: null };
    case PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload.profile,
        isLoading: false,
        error: null,
      };
    case PROFILE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
}
