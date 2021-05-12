import React, { useEffect, useContext } from 'react'

import CartItemsGrid from '../../pages/Cart/components/CartItemsGrid';
import CartGridHeader from './components/CartGridHeader';
import CartGridBottom from './components/CartGridBottom';
import { CartContext } from './context/CartContext';

const Cart= (): JSX.Element => {
  const { loadCartItemsDetails, cartItemDetails } = useContext(CartContext);
  useEffect(() => {
    loadCartItemsDetails();
  }, []);
  const hasCartItemDetails = Object.keys(cartItemDetails).length > 0;
  return (
    <div>
      <h1>Cart view</h1>
      <CartGridHeader/>
      {hasCartItemDetails && <CartItemsGrid  />}
      <CartGridBottom />
    </div>
  )
}

export default Cart
