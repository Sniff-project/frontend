import { profileLocation } from "@core/Config/sniffApi";
import axios from "axios";

export const getRegions = async (token) => {
	try {
		const response = await axios.get(`${profileLocation}/regions`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};




