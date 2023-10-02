const Add_to_cart = 'Add_to_cart';
const Remove_from_cart = 'Remove_from_cart';

export const AddToCart = (item) => ({
    type: Add_to_cart,
    payload: item,
});

export const RemoveFromCart = (itemId) => ({
    type: Remove_from_cart,
    payload: itemId,
});