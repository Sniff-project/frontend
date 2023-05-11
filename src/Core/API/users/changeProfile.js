import { profileUrl } from "@core/Config/sniffApi";
import axios from "axios";

export const changeProfileData = async (
    userId,
    token,
    firstname,
    lastname,
    email,
    phone,
    region,
    city
) => {
    try {
        const response = await axios.patch(
            `${profileUrl}/${userId}`,
            {
                firstname,
                lastname,
                email,
                phone,
                region,
                city
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