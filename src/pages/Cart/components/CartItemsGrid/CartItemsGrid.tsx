import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

export const CartItemsGrid = (): JSX.Element | null => {
  const { cartItemsArray, isCartEmpty } = useContext(CartContext);

  let renderCartItems = null;

  if (!isCartEmpty()) {
    const cartItemsGridItems = cartItemsArray().map((cartItem, index) =>
      <CartItem cartItem={cartItem} key={`cart-item-grid-${index}`} />
    );

    renderCartItems = (
      <Grid container>
        {cartItemsGridItems}
      </Grid>
    );
  }
  return renderCartItems;
}
