export const UPLOAD_AVATAR_REQUEST = "UPLOAD_AVATAR_REQUEST";
export const UPLOAD_AVATAR_SUCCESS = "UPLOAD_AVATAR_SUCCESS";
export const UPLOAD_AVATAR_FAILURE = "UPLOAD_AVATAR_FAILURE";

export const uploadAvatarRequest = () => {
  return { type: UPLOAD_AVATAR_REQUEST };
};

export const uploadAvatarSuccess = (success) => {
  return { type: UPLOAD_AVATAR_SUCCESS, payload: { success } };
};

export const uploadAvatarFailure = (error) => {
  return { type: UPLOAD_AVATAR_FAILURE, payload: { error } };
};
