import {
	changePasswordRequest,
	changePasswordSuccess,
	changePasswordFailure,
} from "@core/Store/actions/users";

import { changePassword as changePasswd } from "@core/API/users";

const successMsg = "Пароль успішно змінено!";
const errorMsg = "Невірний пароль!";
const unknownError = "Щось пішло не так :(";

export const changePassword = ({
	userId,
	token,
	currentPassword,
	newPassword,
}) => {
	return async (dispatch) => {
		try {
			dispatch(changePasswordRequest());
			const response = await changePasswd(
				userId,
				token,
				currentPassword,
				newPassword
			);
			if (response.status === 200) {
				const result = {
					...response.data,
					message: successMsg
				};
				dispatch(changePasswordSuccess(result));
			} else {
				// error 404 or others
				const result = {
					...response.data,
					message: errorMsg
				};
				dispatch(changePasswordFailure(result));
			}
		} catch (error) {
			// unexpected errors
			const result = {
				...error,
				message: unknownError
			};
			dispatch(changePasswordFailure(result));
			throw error;
		}
	};
};
