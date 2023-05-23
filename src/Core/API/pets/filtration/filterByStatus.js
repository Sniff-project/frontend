import { filterByStatus as url } from "@core/Config/sniffApi";
import axios from "axios";

export const filterByStatus = async (token, status) => {
	try {
		const response = await axios.get(`${url}${status}`);
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};