import {
  petProfileRequest,
  petProfileSuccess,
  petProfileFailure,
} from "@core/Store/actions/pets";

import { getPetProfile as getPetProf } from "@core/API/pets";

const successMsg = "Профіль завантажено!";
const errorMsg = "Тваринка не знайдена!";
const unknownError = "Щось пішло не так :(";

export const getPetProfile = ({ petId, token }) => {
  return async (dispatch) => {
    try {
      dispatch(petProfileRequest());
      const response = await getPetProf(petId, token);
      if (response.status === 200) {
        const result = {
          ...response.data,
          gender:
            response.data.gender === "MALE"
              ? "Чоловіча"
              : response.data.gender === "FEMALE"
              ? "Жіноча"
              : "Невідомо",
          status: response.data.status === "FOUND" ? "Знайдено" : "Загублено",
          message: successMsg,
        };
        dispatch(petProfileSuccess(result));
      } else {
        // error 404 or others
        const result = {
          ...response.data,
          message: errorMsg,
        };
        dispatch(petProfileFailure(result));
      }
    } catch (error) {
      // unexpected errors
      const result = {
        ...error,
        message: unknownError,
      };
      dispatch(petProfileFailure(result));
      throw error;
    }
  };
};
