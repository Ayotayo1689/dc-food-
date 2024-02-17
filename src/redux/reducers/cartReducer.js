import {ADD_TO_CART, CLEAR_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART} from "../actions/cartActions";
import {toast} from "react-toastify";

const initialState = {
    items: [],
    currentProduct: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TO_CART': {
            const product = action.payload;
            const existingProductIndex = state.items.findIndex((item) => item.id === product.id);

            if (existingProductIndex !== -1) {
                toast.warning(`${product.title} is already in the cart!`);
                return state;
            } else {
                toast.success(`${product.title} added to cart!`);
                return {
                    ...state,
                    items: [...state.items, { ...product, qty: 1 }],
                };
            }
        }

        case 'INCREASE_QUANTITY': {
            const product = action.payload;
            const updatedItems = state.items.map((item) =>
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            );

            return {
                ...state,
                items: updatedItems,
            };
        }

        case 'DECREASE_QUANTITY': {
            const product = action.payload;
            const updatedItems = state.items.map((item) =>
                item.id === product.id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
            );

            return {
                ...state,
                items: updatedItems,
            };
        }

        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };

        case CLEAR_CART:
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
};

export default cartReducer;
