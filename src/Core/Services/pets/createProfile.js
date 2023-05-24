import {
  createPetProfileRequest,
  createPetProfileSuccess,
  createPetProfileFailure,
  createPetProfileReset,
} from "@core/Store/actions/pets";

import { createPetProfile as createPetProf } from "@core/API/pets";

const successMsg = "Профіль успішно створено!";
const errorMsg = "Не вдалось створити профіль!";
const unknownError = "Щось пішло не так :(";

export const createPetProfile = ({ token, data }) => {
  data.gender =
    data.gender === "Чоловіча"
      ? "MALE"
      : data.gender === "Жіноча"
      ? "FEMALE"
      : "UNKNOWN";
  data.status = data.status === "Знайдено" ? "FOUND" : "LOST";
  return async (dispatch) => {
    try {
      dispatch(createPetProfileRequest());
      const response = await createPetProf({ token, data });
      if (response.status === 201) {
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
        dispatch(createPetProfileSuccess(result));
      } else {
        // error 404 or others
        const result = {
          ...response.data,
          message: errorMsg,
        };
        dispatch(createPetProfileFailure(result));
      }
    } catch (error) {
      // unexpected errors
      const result = {
        ...error,
        message: unknownError,
      };
      dispatch(createPetProfileFailure(result));
      throw error;
    }
  };
};

export const createPetProfileResetState = () => {
  return async (dispatch) => {
    dispatch(createPetProfileReset());
  };
};
