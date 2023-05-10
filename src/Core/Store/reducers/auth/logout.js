import {
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
  } from "@core/Store/actions";
  
  const initialState = {
    success: null,
    isLoading: false,
    error: null,
  };
  
  export function logoutReducer(state = initialState, action) {
    switch (action.type) {
      case LOGOUT_REQUEST:
        return { ...state, isLoading: true, error: null };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          success: action.payload.success,
          isLoading: false,
          error: null,
        };
      case LOGOUT_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      default:
        return state;
    }
  }
  