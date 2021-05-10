import React from 'react'

import CartItemsGrid from '../../pages/Cart/components/CartItemsGrid';
import CartGridHeader from './components/CartGridHeader';
import CartGridBottom from './components/CartGridBottom';

const Cart= (): JSX.Element => {
  return (
    <div>
      <h1>Cart view</h1>
      <CartGridHeader/>
      <CartItemsGrid  />
      <CartGridBottom />
    </div>
  )
}

export default Cart
