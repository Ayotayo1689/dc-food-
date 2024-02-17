const initialState = {
    products: [],
    currentProduct: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };

        case 'SET_CURRENT_PRODUCT':
            return {
                ...state,
                currentProduct: action.payload,
            };

        default:
            return state;
    }
}