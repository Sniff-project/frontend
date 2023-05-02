import { signUpUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const signUp = async (firstname, lastname, email, phone, password) => {
	try {
		const response = await axios.post(signUpUrl, {
			firstname,
			lastname,
			email,
			phone,
			password,
		});
		return response;
	} catch (error) {
		return error.response;
	}
};
