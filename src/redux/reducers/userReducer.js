import {LOGIN_USER, LOGOUT_USER} from "@/redux/actions/userActions";

const initialState = {
    user: null,
};

// User reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default userReducer;
