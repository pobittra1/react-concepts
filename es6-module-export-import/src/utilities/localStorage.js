const getCartFromLocalStorage = () => {
    const storedCartStr = localStorage.getItem("cart");
    if (storedCartStr) {
        const storedCart = JSON.parse(storedCartStr);
        return storedCart;
    }
    return [];
}

const saveCartItemToLocalStorage = (cart) => {
    const cartStr = JSON.stringify(cart);
    localStorage.setItem("cart", cartStr);
}

const addItemToCartLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    cart.push(...cart, id);

    //save new cart to the local storage
    saveCartItemToLocalStorage(cart);
}

export { getCartFromLocalStorage, addItemToCartLocalStorage };