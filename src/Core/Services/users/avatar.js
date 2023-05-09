import {
	uploadAvatarRequest,
	uploadAvatarSuccess,
	uploadAvatarFailure,
} from "@core/Store/actions/users";

import { uploadAvatar as upldAvatar } from "@core/API/users";

const successMsg = "Аватарка успішно завантажена!";
const errorMsg = "Не вдалося завантажити аватарку!";
const unknownError = "Щось пішло не так :(";

export const uploadAvatar = ({
	userId,
	token,
	image
}) => {
	return async (dispatch) => {
		try {
			dispatch(uploadAvatarRequest());
			const response = await upldAvatar(
				userId,
				token,
				image
			);
			if (response.status === 200) {
				const result = {
					...response.data,
					message: successMsg
				};
				dispatch(uploadAvatarSuccess(result));
			} else {
				// error 404 or others
				const result = {
					...response.data,
					message: errorMsg
				};
				dispatch(uploadAvatarFailure(result));
			}
		} catch (error) {
			// unexpected errors
			const result = {
				...error,
				message: unknownError
			};
			dispatch(uploadAvatarFailure(result));
			throw error;
		}
	};
};
