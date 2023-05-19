import {
	CITIES_REQUEST,
	CITIES_SUCCESS,
	CITIES_FAILURE
  } from "@core/Store/actions/users";
  
  const initialState = {
    cities: []
  };
  
  export function citiesReducer(state = initialState, action) {
    switch (action.type) {
      case CITIES_REQUEST:
        return { ...state, isLoading: true, error: null };
      case CITIES_SUCCESS:
        return {
          ...state,
          cities: action.payload.cities,
          isLoading: false,
          error: null,
        };
      case CITIES_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
      default:
        return state;
    }
  }
  