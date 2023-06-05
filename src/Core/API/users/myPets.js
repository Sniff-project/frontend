import { profileUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const getUserPets = async ({ userId, token, page, size, status }) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(
      `${profileUrl}/${userId}/pets?page=${page}&size=${size}${
        status ? `&status=${status}` : ""
      }`,
      {
        headers: headers,
      }
    );
    return response;
  } catch (error) {
    return error?.response || { message: "Unknown error occurred." };
  }
};
