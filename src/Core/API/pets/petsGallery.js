import { petProfileUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const getGallery = async (token) => {
	try {
		const response = await axios.get(`${petProfileUrl}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};



