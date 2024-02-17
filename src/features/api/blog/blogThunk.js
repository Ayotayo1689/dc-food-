import axiosInstance from "@/features/api/axios";
import { logoutUser } from "@/redux/actions/userActions";
import endpoints from "@/features/api/endpoints";

export const getBlogsThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(endpoints.getBlogs);

		return resp.data?.results;
	} catch (error) {
		return null;
	}
};

export const getSingleBlogThunk = async (id, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`api/blog/${id}/`);
		return resp.data;
	} catch (error) {
		return null;
	}
};

export const getBlogCommentByIdThunk = async (id, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`api/blog/${id}/with_comments`);
		return resp.data;
	} catch (error) {
		return null;
	}
};

export const postBlogCommentThunk = async (formData, thunkAPI) => {
	try {
		const resp = await axiosInstance.post(endpoints.getBlogComments, formData, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		});

		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue("Failed to post comment");
	}
};

export const clearStoreThunk = async (message, thunkAPI) => {
	try {
		thunkAPI.dispatch(logoutUser(message));
		return Promise.resolve();
	} catch (error) {
		return Promise.reject();
	}
};
