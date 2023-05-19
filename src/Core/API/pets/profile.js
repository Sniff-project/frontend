import { petProfileUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const getPetProfile = async (petId, token = null) => {
  try {
    const data = token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : null;
    const response = await axios.get(`${petProfileUrl}/${petId}`, data);
    return response;
  } catch (error) {
    return error?.response || { message: "Unknown error occurred." };
  }
};

export const editPetProfile = async ({ petId, token = null, data }) => {
  const {
    status,
    name,
    latitude,
    longitude,
    gender,
    foundOrLostDate,
    description,
  } = data;
  try {
    const response = await axios.patch(
      `${petProfileUrl}/${petId}`,
      {
        status: status,
        name: name,
        latitude: latitude,
        longitude: longitude,
        gender: gender,
        foundOrLostDate: foundOrLostDate,
        description: description,
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
