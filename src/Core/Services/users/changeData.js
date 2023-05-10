import {changeProfileData} from "../../API/users/changeProfile";

const unknownError = "Щось пішло не так :(";

export const changeData = ({
	userId,
	token,
	firstname,
	lastname,
	email,
	phone,
	region,
	city
}) => {
    return async (dispatch) => {
        try {
            const response = await changeProfileData(
                userId,
                token,
                firstname,
                lastname,
                email,
                phone,
                region,
                city
            );
            if (response.status === 200) {
                const result = {
                    ...response.data,
                    message: "successs"
                };
                console.log(result);

            } else {
                const result = {
                    ...response.data,
                    message: "errrror"
                };
                console.log(result);

            }
        } catch (error) {
            const result = {
                ...error,
                message: unknownError
            };
            console.log(result);
            throw error;
        }
    };
};
