import { profileUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const getProfile = async ({ userId, token = "" }) => {
  let headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
  try {
    const response = await axios.get(`${profileUrl}/${userId}`, {
      headers: headers,
    });
    return response;
  } catch (error) {
    return error?.response || { message: "Unknown error occurred." };
  }
};
