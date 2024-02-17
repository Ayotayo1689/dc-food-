export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId,
});

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    };
};
export const increaseQuantity = (product) => {
    return {
        type: INCREASE_QUANTITY,
        payload: product,
    };
};

export const decreaseQuantity = (product) => {
    return {
        type: DECREASE_QUANTITY,
        payload: product,
    };
};