import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { createStandaloneToast } from "@chakra-ui/react";
import {loginUserThunk, registerUserThunk} from "@/features/user/userThunk";



const { toast } = createStandaloneToast();

export const getUserFromLocalStorage = () => {
    let user;
    if (typeof window !== "undefined") {
        const result = localStorage.getItem("user");
        user = result ? JSON.parse(result) : false;
    }

    return user;
};
export const removeFromLocalStorage = () => {
    localStorage.removeItem("user");

};

const initialState = {
    user:getUserFromLocalStorage(),
    loading: false,
    error: null,
};


export const loginUser = createAsyncThunk(
    "user/loginUser",
    loginUserThunk
);

export const registerUser = createAsyncThunk(
    "user/registerUser",
    registerUserThunk
);


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;

        },
        setLoading(state, action) {
            state.loading = action.payload;

        },
        setError(state, action) {
            state.error = action.payload;
        },

    },

    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.success = true;
                toast({
                    title: "Awesome!",
                    description: "Account Created! Proceed to Login",
                    status: "info",
                    duration: 5000,
                    isClosable: true,
                    position: "top-right",
                    variant: "left-accent",
                });
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                const msg = Object.values(payload);


                toast({
                    title: "An error occurred",
                    description: msg,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    variant: "left-accent",
                    position: "top-right",
                });
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })

            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                // state.user = payload

                const decodedToken = jwt_decode(payload.access);
                state.user = {
                	token: payload.access,
                	...decodedToken,
                	refresh: payload.refresh,
                };
                // addUserToLocalStorage({
                // 	token: payload.access,
                // 	...decodedToken,
                // 	refresh: payload.refresh,
                // });
                toast({
                    title: "Welcome Back",
                    description: ` Hi! Welcome Back `,
                    // description: ` Hi ${decodedToken.username}`,
                    status: "info",
                    duration: 5000,
                    isClosable: true,
                    position: "top-right",
                    variant: "left-accent",
                });
            })

            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false;

                const msg = Object.values(payload);

                console.log(msg);


                toast({
                    title: "Invalid username and password",
                    description: msg,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    variant: "left-accent",
                    position: "top-right",
                });
            })
    }

});

export const { setUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
