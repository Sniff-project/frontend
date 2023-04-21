import { login } from "@core/Store/effects";

export const signIn = ({ email, password }) => {
	return login(email, password);
};
