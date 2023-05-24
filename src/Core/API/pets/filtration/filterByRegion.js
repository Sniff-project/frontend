import { filterByRegion as url } from "@core/Config/sniffApi";
import axios from "axios";

export const filterByRegion = async (id) => {
	try {
		const response = await axios.get(`${url}${id}`);
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};