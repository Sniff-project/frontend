import { imageUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const uploadAvatar = async (
	userId,
	token,
	image
) => {
	try {
		const response = await axios.put(
			`${imageUrl}/${userId}/upload`, { image },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};
