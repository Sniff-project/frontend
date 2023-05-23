import { petsImageUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const uploadPhotosPetProfile = async ({ petId, token = null, data }) => {
  const { images } = data;
  try {
    const response = await axios.post(
      `${petsImageUrl}/${petId}/upload`,
      {
        images: images,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (error) {
    return error?.response || { message: "Unknown error occurred." };
  }
};
