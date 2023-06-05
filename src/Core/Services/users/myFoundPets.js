import {
  getUserFoundPetsRequest,
  getUserFoundPetsSuccess,
  getUserFoundPetsFailure,
  resetUserFoundPets as reset,
} from "@core/Store/actions/users/myFoundPets";

import { getUserPets } from "@core/API/users/myPets";

const successMsg = "Список тваринок отриманий!";
const errorMsg = "Не вдалось отримати список!";
const unknownError = "Щось пішло не так :(";

export const userFoundPets = ({
  userId,
  token,
  page = 0,
  size = 3,
  status = null,
}) => {
  return async (dispatch) => {
    try {
      dispatch(getUserFoundPetsRequest());
      const response = await getUserPets({
        userId,
        token,
        page,
        size,
        status: "FOUND",
      });
      if (response.status === 200) {
        const result = {
          ...response.data,
          message: successMsg,
        };
        dispatch(getUserFoundPetsSuccess(result));
      } else {
        // error 404 or others
        const result = {
          ...response.data,
          message: errorMsg,
        };
        dispatch(getUserFoundPetsFailure(result));
      }
    } catch (error) {
      // unexpected errors
      const result = {
        ...error,
        message: unknownError,
      };
      dispatch(getUserFoundPetsFailure(result));
      throw error;
    }
  };
};

export const resetUserFoundPets = () => {
  return async (dispatch) => {
    dispatch(reset());
  };
};
