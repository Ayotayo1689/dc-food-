
import { setUser, setLoading, setError } from './userSlice';
import {toast} from "react-toastify";
import {setItem} from "@/utils/localStorage";
import axiosInstance from "../../utils/axios";

// export const registerUser = (userData) => async (dispatch) => {
//     dispatch(setLoading(true));
//     try {
//         const response = await axiosInstance.post('/auth/register/', userData);
//         dispatch(setUser(response.data));
//         dispatch(setLoading(false));
//     } catch (error) {
//         dispatch(setError(error.message));
//         dispatch(setLoading(false));
//
//         const errorMessages = Object.values(error.response.data).join(', ');
//
//         toast.error(errorMessages, {
//             position: "top-center",
//             autoClose: 2500,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//         });
//
//         console.log(error.response.data);
//     }
// };




//     try {
//         const response = await axiosInstance.post('/auth/register/', userData);
//         // dispatch(setUser(response.data));
//         dispatch(setLoading(false));
//         // toast.success("Account Created! Proceed to Login")
//     } catch (error) {
//         dispatch(setError(error.message));
//         dispatch(setLoading(false));
//         const ErrArray = Object.entries(error.response.data);
//         ErrArray.map(([key, value]) => {
//             toast.error("" + " " + value);
//         });
//         console.log(error.response.data)
//     }
// };



export const loginUserThunk = async (user, thunkAPI) => {
    try {
        const resp =  await axiosInstance.post(`/auth/login/`, user);
        return resp.data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
};


export const registerUserThunk = async (user, thunkAPI) => {

    try {
        const resp = await axiosInstance.post(`/auth/register/`, user);
        return resp.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
};



