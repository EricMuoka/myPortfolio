import { combineReducers } from "redux";
import CartReducer from "./cart/reducers";

const RootReducer = combineReducers({
    cart: CartReducer,
});

export default RootReducer;