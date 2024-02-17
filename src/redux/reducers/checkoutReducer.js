import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: null,
    reducers: {
        setCheckoutInfo: (state, action) => {
            return action.payload;
        },
        clearCheckoutInfo: () => null,
    },
});

export const { setCheckoutInfo, clearCheckoutInfo } = checkoutSlice.actions;
export default checkoutSlice.reducer;