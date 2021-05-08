import React, { useState } from "react";

import { getLocalStorageValue } from '../helpers/LocalStorageHelpers';

const CartContext = React.createContext([[], () => {}]);
const CART_ITEMS_KEY = 'cartItems';
let cartProviderInitialState = {};

interface CartItems {

}

try {
  // Get the cart items from local storage
  const cartItems = getLocalStorageValue(CART_ITEMS_KEY);
  cartProviderInitialState = cartItems;
} catch (error) {
  // If error do nothing. initialState will be set to empty array indicating no products in cart
}

// Wrapper around CartContext.Provider, which has a local state,
// which will be used to maintain the cart items.
const CartProvider = (props) => {
  const [state, setState] = useState(cartProviderInitialState);
  return (
    <CartContext.Provider value={[state, setState]}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };