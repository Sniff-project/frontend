import {
	citiesRequest,
	citiesSuccess,
	citiesFailure,
} from "@core/Store/actions/users";

import { getCities } from "@core/API/users";

const successMsg = "Міста отримані!";
const errorMsg = "Помилка отримання міст!";
const unknownError = "Щось пішло не так :(";

export const cities = () => {
	return async (dispatch) => {
		try {
			dispatch(citiesRequest());
			const response = await getCities();
			if (response.status === 200) {
				const result = {
					citiesArray: [...response.data],
					message: successMsg
				};
				dispatch(citiesSuccess(result));
			} else {
				// error 404 or others
				const result = {
					citiesArray: [...response.data],
					message: errorMsg
				};
				dispatch(citiesFailure(result));
			}
		} catch (error) {
			// unexpected errors
			const result = {
				...error,
				message: unknownError
			};
			dispatch(citiesFailure(result));
			throw error;
		}
	};
};
