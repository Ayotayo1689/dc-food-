import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import userReducer from "@/redux/reducers/userReducer";
import productReducer from "@/redux/reducers/productReducer";
import checkoutReducer from './checkoutReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    checkoutInfo: checkoutReducer,
});

export default rootReducer;
