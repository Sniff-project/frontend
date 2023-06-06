import {
  getUserLostPetsRequest,
  getUserLostPetsSuccess,
  getUserLostPetsFailure,
  resetUserLostPets as reset,
} from "@core/Store/actions/users/myLostPets";

import { getUserPets } from "@core/API/users/myPets";

const successMsg = "Список тваринок отриманий!";
const errorMsg = "Не вдалось отримати список!";
const unknownError = "Щось пішло не так :(";

export const userLostPets = ({ userId, page = 0, size = 3, status = null }) => {
  return async (dispatch) => {
    try {
      dispatch(getUserLostPetsRequest());
      const response = await getUserPets({
        userId,
        page,
        size,
        status: "LOST",
      });
      if (response.status === 200) {
        const result = {
          ...response.data,
          message: successMsg,
        };
        dispatch(getUserLostPetsSuccess(result));
      } else {
        // error 404 or others
        const result = {
          ...response.data,
          message: errorMsg,
        };
        dispatch(getUserLostPetsFailure(result));
      }
    } catch (error) {
      // unexpected errors
      const result = {
        ...error,
        message: unknownError,
      };
      dispatch(getUserLostPetsFailure(result));
      throw error;
    }
  };
};

export const resetUserLostPets = () => {
  return async (dispatch) => {
    dispatch(reset());
  };
};
