import { signInUrl } from "@core/Config/sniffApi";

export const signIn = async (email, password) => {
	try {
		const response = await fetch(signInUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw new Error("Failed to login");
	}
};
