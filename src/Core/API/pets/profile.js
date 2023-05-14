import { petProfileUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const getPetProfile = async (petId, token = null) => {
	try {
		const data = token ? {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		} : null;
		const response = await axios.get(`${petProfileUrl}/${petId}`, data);
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};





