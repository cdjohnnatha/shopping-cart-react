import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CartContext } from '../../context/CartContext';
import { CreditCardInputOption } from '../../CartInterface';

interface CartResumeProps {
  payment: CreditCardInputOption
};

export const CartResume = ({ payment }: CartResumeProps): JSX.Element => {
  const { totalAmountCartItems, totalCartItems, makeCheckout } = useContext(CartContext);
  
  const onClickCheckoutHandler = async () => {
    const result = await makeCheckout(payment);
    if (result) {
      window.window.location.href = "/";
    }
  }
  return (
    <Grid container>
      <Grid item xs={12} style={{ marginBottom: '1em' }}>
        <Typography variant="h5">
          Cart resume
        </Typography>
      </Grid>
      <Grid container item justify="flex-end" xs={12} style={{ marginTop: '1em' }}>
        Items: {totalCartItems()}
      </Grid>
      <Grid container item justify="flex-end" xs={12} style={{ marginTop: '1em' }}>
        <Typography variant="h5">
          Total: {totalAmountCartItems()}
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: '1em' }}>
        <Button
          fullWidth
          variant="outlined"
          id="btn-payment"
          onClick={() => onClickCheckoutHandler()}
        >
          Pay
        </Button>
      </Grid>
    </Grid>
  )
}
