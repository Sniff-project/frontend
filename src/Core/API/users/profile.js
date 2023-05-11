import { profileUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const getProfile = async (userId, token) => {
	try {
		const response = await axios.get(`${profileUrl}/${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};





