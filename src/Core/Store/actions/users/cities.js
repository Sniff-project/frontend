export const CITIES_REQUEST = "CITIES_REQUEST";
export const CITIES_SUCCESS = "CITIES_SUCCESS";
export const CITIES_FAILURE = "CITIES_FAILURE";

export const citiesRequest = () => {
  return { type: CITIES_REQUEST };
};

export const citiesSuccess = (cities) => {
  return { type: CITIES_SUCCESS, payload: { cities } };
};

export const citiesFailure = (error) => {
  return { type: CITIES_FAILURE, payload: { error } };
};
