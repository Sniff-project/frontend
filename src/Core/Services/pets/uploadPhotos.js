import {
  uploadPhotosPetProfileRequest,
  uploadPhotosPetProfileSuccess,
  uploadPhotosPetProfileFailure,
} from "@core/Store/actions/pets";

import { uploadPhotosPetProfile } from "@core/API/pets";

const successMsg = "Світлини успішно завантажено!";
const errorMsg = "Не вдалося завантажити фото!";
const unknownError = "Щось пішло не так :(";

export const uploadPetPhotos = ({ petId, token, data }) => {
  return async (dispatch) => {
    try {
      dispatch(uploadPhotosPetProfileRequest());
      const response = await uploadPhotosPetProfile({ petId, token, data });
      if (response.status === 200) {
        const result = {
          ...response.data,
          message: successMsg,
        };
        dispatch(uploadPhotosPetProfileSuccess(result));
      } else {
        // error 400 or others
        const result = {
          ...response.data,
          message: errorMsg,
        };
        dispatch(uploadPhotosPetProfileFailure(result));
      }
    } catch (error) {
      // unexpected errors
      const result = {
        ...error,
        message: unknownError,
      };
      dispatch(uploadPhotosPetProfileFailure(result));
      throw error;
    }
  };
};
