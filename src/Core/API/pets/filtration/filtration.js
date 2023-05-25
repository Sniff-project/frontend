import { petProfileUrl} from "@core/Config/sniffApi";
import axios from "axios";

export const filtration = async (url) => {
	try {
		const response = await axios.get(`${petProfileUrl}?${url}`);
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};