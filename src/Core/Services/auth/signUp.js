import {
	registerRequest,
	registerSuccess,
	registerFailure,
} from "@core/Store/actions";

import { signUp } from "@core/API/auth";

const successMsg = "Реєстрація прошла успішно!";
const errorMsg = "Користувач з таким email/телефоном вже зареєстрований!";
const unknownError = "Щось пішло не так :(";

export const register = ({ firstname, lastname, email, phone, password }) => {
	return async (dispatch) => {
		try {
			dispatch(registerRequest());
			const response = await signUp(
				firstname,
				lastname,
				email,
				phone,
				password
			);
			if (response.status === 201) {
				const result = {
					...response.data,
					message: successMsg
				};
				dispatch(registerSuccess(result));
			} else {
				// error 404 or others
				const result = {
					...response.data,
					message: errorMsg
				};
				dispatch(registerFailure(result));
			}
		} catch (error) {
			// unexpected errors
			const result = {
				...error,
				message: unknownError
			};
			dispatch(registerFailure(result));
			throw error;
		}
	};
};
