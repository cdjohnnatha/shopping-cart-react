import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CartContext } from '../../context/CartContext';
import { CreditCardInputOption } from '../../CartInterface';
import { CartResumeItems } from './components/CartResumeItems/CartResumeItems';

interface CartResumeProps {
  payment: CreditCardInputOption
};

export const CartResume = ({ payment }: CartResumeProps): JSX.Element => {
  const {
    totalAmountCartItems,
    totalCartItems,
    makeCheckout,
    products,
  } = useContext(CartContext);
  const [redirect, setRedirect] = useState<boolean>(false);
  
  const onClickCheckoutHandler = async () => {
    const isApprovedPayment = await makeCheckout(payment);
    if (isApprovedPayment) setRedirect(true);
  }

  return (
    <Grid container>
      <Grid item xs={12} style={{ marginBottom: '1em' }}>
        <Typography variant="h5">
          Cart resume
        </Typography>
      </Grid>
      <CartResumeItems  products={products} />
      <Grid container item justify="flex-end" xs={12} style={{ marginTop: '1em' }}>
        Items: {totalCartItems()}
      </Grid>
      <Grid container item justify="flex-end" xs={12} style={{ marginTop: '1em' }}>
        <Typography variant="h5">
          Total: R$ {totalAmountCartItems().toFixed(2)}
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
        {redirect && <Redirect to="/" />}
      </Grid>
    </Grid>
  )
}
