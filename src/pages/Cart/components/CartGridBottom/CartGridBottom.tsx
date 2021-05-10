import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { CartContext } from '../../context/CartContext';

export const CartGridBottom = (): JSX.Element => {
  const { totalAmountCartItems } = useContext(CartContext);
  const totalAmount = totalAmountCartItems().toFixed(2);
  return (
    <Grid
      container
      key={`cart-bottom`}
      className="products-elements"
      alignItems="center"
      justify="flex-end"
    >
      <Grid item xs={12} style={{ marginTop: '2em' }}>
        <Divider />
      </Grid>
      <Grid item xs={2} style={{ marginTop: '2em' }}>
        <Typography variant="h5">
          Total:
          <span style={{ fontWeight: 'bold', marginLeft: '0.5em' }}>
            {totalAmount}
          </span>
        </Typography>
        <footer style={{ marginTop: '2em' }}>
          <Button variant="outlined" color="primary">
            Proceed checkout
          </Button>
        </footer>
      </Grid>
    </Grid>
  )
}
