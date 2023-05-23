import { getGalleryPage } from "@core/Config/sniffApi";
import axios from "axios";

export const getGallery = async (token, page = 0) => {
	try {
		const response = await axios.get(`${getGalleryPage}${page}`);
		return response;
	} catch (error) {
		return error?.response || { message: "Unknown error occurred." };
	}
};



