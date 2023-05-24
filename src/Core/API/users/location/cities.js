import { profileLocation } from "@core/Config/sniffApi";
import axios from "axios";

export const getCities = async () => {
	try {
		const response = await axios.get(`${profileLocation}/cities`);
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};





