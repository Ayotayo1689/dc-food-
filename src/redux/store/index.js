import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/redux/reducers';

// Load cart items from local storage if available
let cartItemsFromStorage = [];
if (typeof window !== 'undefined') {
    const storedCartItems = localStorage.getItem('cartItems');
    cartItemsFromStorage = storedCartItems ? JSON.parse(storedCartItems) : [];
}

const initialState = {
    cart: {
        items: cartItemsFromStorage,
    },
    user: {
        loggedIn: false,
        userData: null,
        loading: false,
    },
    isLoading: false,
    checkoutInfo: null,
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

// Subscribe to changes in the cart state and update local storage
store.subscribe(() => {
    const cartItems = store.getState().cart.items;
    if (typeof window !== 'undefined') {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
});

export default store;
