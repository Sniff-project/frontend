import { filterByCity as url } from "@core/Config/sniffApi";
import axios from "axios";

export const filterByCity = async (id) => {
	try {
		const response = await axios.get(`${url}${id}`);
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};