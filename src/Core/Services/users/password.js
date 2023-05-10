import {
	changePasswordRequest,
	changePasswordSuccess,
	changePasswordFailure,
} from "@core/Store/actions/users";

import { changePassword as changePasswd } from "@core/API/users";

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
				dispatch(changePasswordSuccess("Пароль успішно змінено!"));
			} else {
				// error 404 or others
				dispatch(changePasswordFailure(response.data));
				throw response.data;
			}
		} catch (error) {
			// unexpected errors
			dispatch(changePasswordFailure(error));
			throw error;
		}
	};
};
