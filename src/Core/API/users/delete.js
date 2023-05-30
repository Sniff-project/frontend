import { profileUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const deleteProfile = async (userId, token) => {
	try {
		const response = await axios.delete(`${profileUrl}/${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
        console.log(response);
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};


