// import { logoutUser } from "../user/userSlice";
import axiosInstance from "../../utils/axios";
import endpoints from "@/features/api/endpoints";
export const getProductsThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(endpoints.getProducts);
		return resp.data.results;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const getSingleProductThunk = async (productId, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(endpoints.getProductsById(productId));
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const getProductsByCategoriesThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(endpoints.getProductByCategories);
		return resp.data.results;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};
