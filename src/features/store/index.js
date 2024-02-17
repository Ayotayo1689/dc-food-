import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import { apiSlice } from "@/services";
import userSlice from "@/features/user/userSlice";
import blogSlice from "@/features/api/blog/blogSlice";
import productSlice from "@/features/products/productSlice";
import testimonialSlice from "@/features/testimonial/testimonialSlice";
import deliverySlice from "@/features/payment/deliverySlice";
import adminSlice from "../admin/adminSlice";

const store = configureStore({
	reducer: {
		cart: cartReducer,
		blogs: blogSlice,
		products: productSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
		user: userSlice,
		testimonials: testimonialSlice,
		delivery: deliverySlice,
		admin: adminSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

store.subscribe(() => {
	const cartItems = store.getState().cart.cartItems;
	if (typeof window !== "undefined") {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}
});
