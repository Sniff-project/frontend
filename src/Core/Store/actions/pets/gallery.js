export const GALLERY_REQUEST = "GALLERY_REQUEST";
export const GALLERY_SUCCESS = "GALLERY_SUCCESS";
export const GALLERY_FAILURE = "GALLERY_FAILURE";

export const galleryRequest = () => {
  return { type: GALLERY_REQUEST };
};

export const gallerySuccess = (gallery) => {
  return { type: GALLERY_SUCCESS, payload: { gallery } };
};

export const galleryFailure = (error) => {
  return { type: GALLERY_FAILURE, payload: { error } };
};
