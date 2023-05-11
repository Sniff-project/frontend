import {
	profileRequest,
	profileSuccess,
	profileFailure,
} from "@core/Store/actions/users";

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
            dispatch(profileRequest());
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
                    message: "success"
                };
                dispatch(profileSuccess(result));

            } else {
                const result = {
                    ...response.data,
                    message: "error"
                };
                dispatch(profileFailure(result));
            }
        } catch (error) {
            const result = {
                ...error,
                message: unknownError
            };
            dispatch(profileFailure(result));
            throw error;
        }
    };
};
