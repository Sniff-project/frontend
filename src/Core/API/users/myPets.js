import { profileUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const getUserPets = async ({ userId, page, size, status }) => {
  try {
    const response = await axios.get(
      `${profileUrl}/${userId}/pets?page=${page}&size=${size}${
        status ? `&status=${status}` : ""
      }`
    );
    return response;
  } catch (error) {
    return error?.response || { message: "Unknown error occurred." };
  }
};
