import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submitQouteThunk } from "./cartThunk";
const getLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
        return JSON.parse(localStorage.getItem("cart"));
    } else {
        return [];
    }
};
const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
};

export const submitQoute = createAsyncThunk(
    "cart/submitQoute",
    submitQouteThunk
);
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const { id, amount, product } = payload;
            const tempItem = state.cart.find((item) => item.id === id);
            if (tempItem) {
                const tempCart = state.cart.map((cartItem) => {
                    if (cartItem.id === id) {
                        let newAmount = cartItem.amount + amount;

                        return { ...cartItem, amount: newAmount };
                    } else {
                        return cartItem;
                    }
                });
                state.cart = tempCart;
            } else {
                const newItem = {
                    id,
                    name: product?.name,
                    amount,
                    image: product?.main_image,
                };

                state.cart = [...state.cart, newItem];
            }
        },
        removeCartItem: (state, { payload }) => {
            const tempCart = state.cart.filter((item) => item.id !== payload);
            state.cart = tempCart;
        },
        clearCart: (state, { payload }) => {
            state.cart = [];
        },

        toggleCartItemAmount: (state, { payload }) => {
            const { id, value } = payload;
            const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === id) {
                    if (value === "inc") {
                        let newAmount = cartItem.amount + 1;

                        return { ...cartItem, amount: newAmount };
                    }
                    if (value === "dec") {
                        let newAmount = cartItem.amount - 1;
                        if (newAmount < 1) {
                            newAmount = 1;
                        }
                        return { ...cartItem, amount: newAmount };
                    }
                } else {
                    return cartItem;
                }
            });
            return { ...state, cart: tempCart };
        },
        countCartItems: (state, { payload }) => {
            const total_items = state.cart.reduce((total, cartItem) => {
                const { amount } = cartItem;
                total += amount;

                return total;
            }, 0);

            state.total_items = total_items;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitQoute.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(submitQoute.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.offices = payload;
            })
            .addCase(submitQoute.rejected, (state, { payload }) => {
                state.isLoading = false;
            });
    },
});

export const {
    addToCart,
    removeCartItem,
    clearCart,
    toggleCartItemAmount,
    countCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
