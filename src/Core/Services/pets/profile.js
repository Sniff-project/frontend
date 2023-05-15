import {
	petProfileRequest,
	petProfileSuccess,
	petProfileFailure,
} from "@core/Store/actions/pets";

import { getPetProfile } from "@core/API/pets";

const successMsg = "Профіль завантажено!";
const errorMsg = "Тваринка не знайдена!";
const unknownError = "Щось пішло не так :(";

export const petProfile = ({ petId, token }) => {
	return async (dispatch) => {
		try {
			dispatch(petProfileRequest());
			const response = await getPetProfile(petId, token);
			if (response.status === 200) {
				const result = {
					...response.data,
					gender: response.data.gender === "MALE" ? "Чоловіча" : "Жіноча",
					message: successMsg
				};
				dispatch(petProfileSuccess(result));
			} else {
				// error 404 or others
				const result = {
					...response.data,
					message: errorMsg
				};
				dispatch(petProfileFailure(result));
			}
		} catch (error) {
			// unexpected errors
			const result = {
				...error,
				message: unknownError
			};
			dispatch(petProfileFailure(result));
			throw error;
		}
	};
};
