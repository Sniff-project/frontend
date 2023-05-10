import { loginRequest, loginSuccess, loginFailure } from "@core/Store/actions";

import { signIn } from "@core/API/auth";

const successMsg = "Ви увійшли в аккаунт!";
const errorMsg = "Невірна пошта або пароль!";
const unknownError = "Щось пішло не так :(";

export const login = ({ email, password }) => {
	return async (dispatch) => {
		try {
			dispatch(loginRequest());
			const response = await signIn(email, password);
			if (response.status === 200) {
				const result = {
					...response.data,
					message: successMsg
				};
				dispatch(loginSuccess(result));
			} else {
				// error 404 or others
				const result = {
					...response.data,
					message: errorMsg
				};
				dispatch(loginFailure(result));
			}
		} catch (error) {
			// unexpected errors
			const result = {
				...error,
				message: unknownError
			};
			dispatch(loginFailure(result));
			throw error;
		}
	};
};
