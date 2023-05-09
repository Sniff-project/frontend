import {
	uploadAvatarRequest,
	uploadAvatarSuccess,
	uploadAvatarFailure,
} from "@core/Store/actions/users";

import { uploadAvatar as upldAvatar } from "@core/API/users";

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
					message: "Аватарка успішно завантажена!"
				};
				dispatch(uploadAvatarSuccess(result));
			} else {
				// error 404 or others
				dispatch(uploadAvatarFailure(response.data));
				throw response.data;
			}
		} catch (error) {
			// unexpected errors
			dispatch(uploadAvatarFailure(error));
			throw error;
		}
	};
};
