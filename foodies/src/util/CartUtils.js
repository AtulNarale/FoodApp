export const calculateCartTotals =(cartItems,quantities) =>{

    const subtotal = cartItems.reduce((total, food) => total + food.price * quantities[food.id], 0);

    const shipping = subtotal > 0 ? 10 : 0; // Flat shipping rate
    const tax = subtotal * 0.1; // Assuming 10% tax rate
    const total = subtotal + shipping + tax;

    return {subtotal,shipping,tax,total}
}