
export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';

export const setCurrentProduct = (product) => {
    return {
        type: 'SET_CURRENT_PRODUCT',
        payload: product,
    };
};
