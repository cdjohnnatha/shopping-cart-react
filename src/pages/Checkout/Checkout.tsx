import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Address from '../../layout/Address';
import { SelectCreditCard } from './components/SelectCreditCard/SelectCreditCard';
import { CartResume } from '../Cart/components/CartResume/CartResume'

export const Checkout = (): JSX.Element => {

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
              <SelectCreditCard />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={1} style={{ padding: '1em' }}>
          <CartResume />
        </Paper>
      </Grid>
    </Grid>
  )
}
