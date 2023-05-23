import {
	galleryRequest,
	gallerySuccess,
	galleryFailure,
} from "@core/Store/actions/pets";

import { chooseSort } from "./chooseSort";

const successMsg = "Галерея завантажена!";
const errorMsg = "Галерея не знайдена!";
const unknownError = "Щось пішло не так :(";

export const petsGallery = (token, request, filter) => {
	return async (dispatch) => {
		try {
			dispatch(galleryRequest());
			const response = await chooseSort(token, request, filter);
			if (response.status === 200) {
				const result = {
					...response.data,
					message: successMsg
				};
				dispatch(gallerySuccess(result));
			} else {
				// error 404 or others
				const result = {
					...response.data,
					message: errorMsg
				};
				dispatch(galleryFailure(result));
			}
		} catch (error) {
			// unexpected errors
			const result = {
				...error,
				message: unknownError
			};
			dispatch(galleryFailure(result));
			throw error;
		}
	};
};
