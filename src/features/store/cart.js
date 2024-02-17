import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

let cartItemsFromStorage = [];
if (typeof window !== 'undefined') {
    const storedCartItems = localStorage.getItem('cartItems');
    cartItemsFromStorage = storedCartItems ? JSON.parse(storedCartItems) : [];
}

export const cartSlice = createSlice({
    name: "cartItems",
    initialState: {
        cartItems: cartItemsFromStorage,
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProductIndex = state.cartItems.findIndex((item) => item.id === product.id);

            if (existingProductIndex !== -1) {
                toast.warning(`${product?.name} already added to cart!`);
                return state;
            } else {
                toast.success(`${product?.name} added to cart!`);
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...product, qty: 1 }],
                };
            }
        },
        increaseQuantity: (state, action) => {
            const product = action.payload;
            const updatedItems = state.cartItems.map((item) =>
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            );

            return {
                ...state,
                cartItems: updatedItems,
            };
        },
        decreaseQuantity: (state, action) => {
            const product = action.payload;
            const updatedItems = state.cartItems.map((item) =>
                item.id === product.id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
            );

            return {
                ...state,
                cartItems: updatedItems,
            };
        },
        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
            };
        },
        clearCart: (state) => {
            return {
                ...state,
                cartItems: [],
            };
        }
    }
})

export const {addToCart, increaseQuantity, clearCart, decreaseQuantity, removeFromCart} = cartSlice.actions
export default cartSlice.reducer