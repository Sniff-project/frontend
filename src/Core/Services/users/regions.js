import {
	regionsRequest,
	regionsSuccess,
	regionsFailure,
} from "@core/Store/actions/users";

import { getRegions } from "@core/API/users";

const successMsg = "Області отримані!";
const errorMsg = "Помилка отримання Областей!";
const unknownError = "Щось пішло не так :(";

export const regions = ({token }) => {
	return async (dispatch) => {
		try {
			dispatch(regionsRequest());
			const response = await getRegions(token);
			if (response.status === 200) {
				const result = {
					regionsArray: [...response.data],
					message: successMsg
				};
				dispatch(regionsSuccess(result));
			} else {
				// error 404 or others
				const result = {
					regionsArray: [...response.data],
					message: errorMsg
				};
				dispatch(regionsFailure(result));
			}
		} catch (error) {
			// unexpected errors
			const result = {
				...error,
				message: unknownError
			};
			dispatch(regionsFailure(result));
			throw error;
		}
	};
};
