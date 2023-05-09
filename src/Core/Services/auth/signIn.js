import { loginRequest, loginSuccess, loginFailure } from "@core/Store/actions";

import { signIn } from "@core/API/auth";

export const login = ({ email, password }) => {
	return async (dispatch) => {
		try {
			dispatch(loginRequest());
			const response = await signIn(email, password);
			if (response.status === 200) {
				dispatch(loginSuccess(response.data.jwtToken));
				return response.data.jwtToken;
			} else {
				// error 404 or others
				dispatch(loginFailure(response.data));
				throw response.data;
			}
		} catch (error) {
			// unexpected errors
			dispatch(loginFailure(error));
			throw error;
		}
	};
};
