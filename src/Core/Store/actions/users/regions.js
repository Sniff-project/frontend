export const REGIONS_REQUEST = "REGIONS_REQUEST";
export const REGIONS_SUCCESS = "REGIONS_SUCCESS";
export const REGIONS_FAILURE = "REGIONS_FAILURE";

export const regionsRequest = () => {
  return { type: REGIONS_REQUEST };
};

export const regionsSuccess = (regions) => {
  return { type: REGIONS_SUCCESS, payload: { regions } };
};

export const regionsFailure = (error) => {
  return { type: REGIONS_FAILURE, payload: { error } };
};
