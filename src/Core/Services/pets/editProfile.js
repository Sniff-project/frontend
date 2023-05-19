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
  return async (dispatch) => {
    try {
      dispatch(editPetProfileRequest());
      const response = await editPetProf({ petId, token, data });
      if (response.status === 200) {
        const result = {
          ...response.data,
          gender: response.data.gender === "MALE" ? "Чоловіча" : "Жіноча",
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
