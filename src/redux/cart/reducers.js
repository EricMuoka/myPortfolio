import { AddToCart, RemoveFromCart } from "./actions";
const Add_to_cart = 'Add_to_cart';
const Remove_from_cart = 'Remove_from_cart';

const intial_state = {
    cartItems: [],
};

export default function CartReducer(state = intial_state, action){
    switch(action.type) {
        case Add_to_cart:
            return {
                ...state,
                cartItems: [...state.items, action.payload],
            };
        case Remove_from_cart:
            return {
                ...state,
                cartItems: state.items.filter(item => item.id !== action.payload),
            };
        default:   
            return state;     
    }
};