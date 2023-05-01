import {
	registerRequest,
	registerSuccess,
	registerFailure,
} from "@core/Store/actions";

import { signUp } from "@core/API/auth";

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
				dispatch(registerSuccess(response.data.jwtToken));
				return response.data.jwtToken;
			} else {
				// error 404 or others
				dispatch(registerFailure(response.data));
				throw response.data;
			}
		} catch (error) {
			// unexpected errors
			dispatch(registerFailure(error.message));
			throw error;
		}
	};
};
