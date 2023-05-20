import {
  editPetProfileRequest,
  editPetProfileSuccess,
  editPetProfileFailure,
} from "@core/Store/actions/pets";

import { editPetProfile as editPetProf } from "@core/API/pets";

const successMsg = "Профіль тваринки змінено!";
const errorMsg = "Дані не змінено!";
const unknownError = "Щось пішло не так :(";

export const editPetProfile = ({ petId, token, data }) => {
  data.gender =
    data.gender === "Чоловіча"
      ? "MALE"
      : data.gender === "Жіноча"
      ? "FEMALE"
      : "UNKNOWN";
  data.status = data.status === "Знайдено" ? "FOUND" : "LOST";
  return async (dispatch) => {
    try {
      dispatch(editPetProfileRequest());
      const response = await editPetProf({ petId, token, data });
      if (response.status === 200) {
        const result = {
          ...response.data,
          gender:
            response.data.gender === "MALE"
              ? "Чоловіча"
              : response.data.gender === "FEMALE"
              ? "Жіноча"
              : "Невідомо",
          message: successMsg,
        };
        dispatch(editPetProfileSuccess(result));
      } else {
        // error 404 or others
        const result = {
          ...response.data,
          message: errorMsg,
        };
        dispatch(editPetProfileFailure(result));
      }
    } catch (error) {
      // unexpected errors
      const result = {
        ...error,
        message: unknownError,
      };
      dispatch(editPetProfileFailure(result));
      throw error;
    }
  };
};
