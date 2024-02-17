import axios from "axios";
// creates an instance of axios
import { getItem } from "./localStorage";
const baseURL =
	process.env.NEXT_PUBLIC_BASE_URL || "https://api.dcfood.tanta.com.ng";
const axiosInstance = axios.create({
	baseURL,
});

axiosInstance.interceptors.request.use(async (config) => {
	try {
		const user = getItem("user");
		if (user) {
			const token = user.access;
			config.headers["Authorization"] = `Bearer ${token}`;
		} else {
		}
	} catch (error) {
		console.error("Error in interceptor:", error);
	}

	return config;
});

export default axiosInstance;
