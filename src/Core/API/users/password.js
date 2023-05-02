import { profileUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const changePassword = async (
	userId,
	token,
	currentPassword,
	newPassword
) => {
	try {
		const response = await axios.put(
			`${profileUrl}/${userId}/password`,
			{
				currentPassword,
				newPassword,
			},
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
