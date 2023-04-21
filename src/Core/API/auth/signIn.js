import { signInUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const signIn = async (email, password) => {
	try {
		const response = await axios.post(signInUrl, { email, password });
		return response;
	} catch (error) {
		return error.response.data;
	}
};
