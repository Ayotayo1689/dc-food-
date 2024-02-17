import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getTestimonialsThunk} from "@/features/testimonial/testimonialThunk";

const initialState = {
    testimonials: [],
    isLoading: false,
}

export const getTestimonial = createAsyncThunk(
    "testimonial/getTestimonial",
    getTestimonialsThunk,
);

export const testimonialSlice = createSlice({
    name: "testimonial",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTestimonial.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTestimonial.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.testimonials = payload;
            })
            .addCase(getTestimonial.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})

export default testimonialSlice.reducer;
