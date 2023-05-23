export const UPLOAD_PHOTOS_PET_PROFILE_REQUEST =
  "UPLOAD_PHOTOS_PET_PROFILE_REQUEST";
export const UPLOAD_PHOTOS_PET_PROFILE_SUCCESS =
  "UPLOAD_PHOTOS_PET_PROFILE_SUCCESS";
export const UPLOAD_PHOTOS_PET_PROFILE_FAILURE =
  "UPLOAD_PHOTOS_PET_PROFILE_FAILURE";

export const uploadPhotosPetProfileRequest = () => {
  return { type: UPLOAD_PHOTOS_PET_PROFILE_REQUEST };
};

export const uploadPhotosPetProfileSuccess = (photos) => {
  return { type: UPLOAD_PHOTOS_PET_PROFILE_SUCCESS, payload: { photos } };
};

export const uploadPhotosPetProfileFailure = (error) => {
  return { type: UPLOAD_PHOTOS_PET_PROFILE_FAILURE, payload: { error } };
};
