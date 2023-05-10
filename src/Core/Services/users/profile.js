import {
	profileRequest,
	profileSuccess,
	profileFailure,
} from "@core/Store/actions/users";

import { getProfile } from "@core/API/users";

export const profile = ({ userId, token }) => {
	return async (dispatch) => {
		try {
			dispatch(profileRequest());
			const response = await getProfile(userId, token);
			if (response.status === 200) {
				dispatch(profileSuccess(response.data));
				return response.data;
			} else {
				// error 404 or others
				dispatch(profileFailure(response.data));
				throw response.data;
			}
		} catch (error) {
			// unexpected errors
			dispatch(profileFailure(error));
			throw error;
		}
	};
};
