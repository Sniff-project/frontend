import { loginRequest, loginSuccess, loginFailure } from "@core/Store/actions";

import { signIn } from "@core/API/auth";

export const login = ({ email, password }) => {
	return async (dispatch) => {
		try {
			dispatch(loginRequest());
			const response = await signIn(email, password);
			if (response.status === 200) {
				dispatch(loginSuccess(response.data));
				return response.data.jwtToken;
			} else {
				// error 404 or others
				dispatch(loginFailure(response.message));
				throw response.message;
			}
		} catch (error) {
			// unexpected errors
			dispatch(loginFailure(error.message));
			throw error;
		}
	};
};
