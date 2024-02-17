import {getDeliveryAreaThunk, getDeliveryFeeThunk} from "@/features/payment/deliveryThunk";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    deliveryArea: [],
    deliveryPrice: null,
}

export const getDeliveryArea = createAsyncThunk(
    "delivery/getDeliveryArea",
    getDeliveryAreaThunk
);

export const getDeliveryFee = createAsyncThunk(
    "delivery/getDeliveryFee",
    getDeliveryFeeThunk
);

const deliverySlice = createSlice({
    name: "delivery",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getDeliveryArea.pending, (state) => {
                    state.isLoading = true;
                }
            )
            .addCase(getDeliveryArea.fulfilled, (state, {payload}) => {
                    state.isLoading = false;
                    state.deliveryArea = payload;
                }
            )
            .addCase(getDeliveryArea.rejected, (state, {}) => {
                    state.isLoading = false;
                }
            )
            .addCase(getDeliveryFee.pending, (state) => {
                    state.isLoading = true;
                }
            )
            .addCase(getDeliveryFee.fulfilled, (state, {payload}) => {
                    state.isLoading = false;
                    state.deliveryPrice = payload;
                }
            )
            .addCase(getDeliveryFee.rejected, (state, {}) => {
                    state.isLoading = false;
                }
            )
    }
});

export default deliverySlice.reducer;