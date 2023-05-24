import { petsImageUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const uploadPhotosPetProfile = async ({ petId, token = null, data }) => {
  const { images } = data;
  try {
    const formData = new FormData();
    images.forEach((image, _) => {
      formData.append(`images`, image);
    });
    const response = await axios.post(
      `${petsImageUrl}/${petId}/upload`,
      formData,
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
