import {
	REGIONS_REQUEST,
	REGIONS_SUCCESS,
	REGIONS_FAILURE,
  } from "@core/Store/actions/users";
  
  const initialState = {
    regions: []
  };
  
  export function regionsReducer(state = initialState, action) {
    switch (action.type) {
      case REGIONS_REQUEST:
        return { ...state, isLoading: true, error: null };
      case REGIONS_SUCCESS:
        return {
          ...state,
          regions: action.payload.regions,
          isLoading: false,
          error: null,
        };
      case REGIONS_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      default:
        return state;
    }
  }
  