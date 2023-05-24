import { profileLocation } from "@core/Config/sniffApi";
import axios from "axios";

export const getRegions = async () => {
	try {
		const response = await axios.get(`${profileLocation}/regions`);
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};




