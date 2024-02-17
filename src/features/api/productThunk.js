import axiosInstance from "../../utils/axios";

export const getProductsThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`api/products`);
		console.log(resp.data);
		return resp.data.results;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const getSingleProductThunk = async (productId, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/products/${productId}/`);

		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};
// export const clearStoreThunk = async (message, thunkAPI) => {
//     try {
//         thunkAPI.dispatch(logoutUser(message));
//         return Promise.resolve();
//     } catch (error) {
//         return Promise.reject();
//     }
// };
