import { profileLocation } from "@core/Config/sniffApi";
import axios from "axios";

export const getCities = async (token) => {
	try {
		const response = await axios.get(`${profileLocation}/cities`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};





