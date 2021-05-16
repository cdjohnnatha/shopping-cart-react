import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { CartItemInterface } from '../../../../CartInterface';

interface CartResumeItemsProps {
  products: CartItemInterface[],
}
export const CartResumeItems = ({ products }: CartResumeItemsProps): JSX.Element => {
  const items = products.map(({ name, quantity, price }, index) => (
    <Grid
      key={`cart-resume-item-${index}`}
      container
      justify="space-between"
      xs={12}
    >
      <Grid item xs={4}>
        {name}
      </Grid>
      <Grid item xs={4}>
        ({quantity}x)
      </Grid>
      <Grid item xs={4}>
        R$: {price.toFixed(2)}
      </Grid>
    </Grid>
  ));
  return (
    <Fragment>
      {items}
    </Fragment>
  )
}
