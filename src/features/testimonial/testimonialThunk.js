import axiosInstance from "@/utils/axios";
import endpoints from "@/features/api/endpoints";

export const getTestimonialsThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(endpoints.getTestimonials);

		return resp.data.results;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};
