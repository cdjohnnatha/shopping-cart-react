import React, { useState, ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Address from '../../layout/Address';
import { SelectCreditCard } from './components/SelectCreditCard/SelectCreditCard';
import { CartResume } from '../Cart/components/CartResume/CartResume'
import { CreditCardInputOption } from '../Cart/CartInterface';

const paymentCreditCardItems = [
  { value: 'refusedCard', label: 'XXXX-XXXX-XXXX-9988' },
  { value: 'acceptedCard',label: 'XXXX-XXXX-XXXX-8889' },
];

export const Checkout = (): JSX.Element => {
  const [selectedCreditCard, setSelectedCreditCard] = useState(paymentCreditCardItems[0].value);
  const onCreditCardChangeHandler = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedCreditCard((event.target.value as string));
  }
  return (
    <Grid container style={{ marginTop: '3em', padding: '1em' }}>
      <Grid container item xs={8}>
        <Paper elevation={1}>
          <Grid container>
            <Grid item xs={6} style={{ padding: '1em' }}>
              <Address />
            </Grid>
            <Grid item xs={6} style={{ padding: '1em' }}>
              <Typography variant="h5">
                Payment method
              </Typography>
              <SelectCreditCard
                selected={selectedCreditCard}
                values={paymentCreditCardItems}
                onChange={onCreditCardChangeHandler}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={1} style={{ padding: '1em' }}>
          <CartResume
            payment={(selectedCreditCard as CreditCardInputOption)}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}
