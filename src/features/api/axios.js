import axios from "axios";
import jwtDecode from "jwt-decode";

const axiosInstance = axios.create({
    baseURL: "https://api.dcfood.tanta.com.ng/",
});


export const checkForUnauthorizedResponse = (error, thunkAPI) => {
    if (error.response.status === 401) {
        thunkAPI.dispatch(clearStore());
        return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data);
};



export default axiosInstance;
