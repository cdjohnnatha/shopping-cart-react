import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const Address = (): JSX.Element => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Customer address</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Joe Doe</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography>Ashley avenue, 60, L5S2X6, ON/Canada</Typography>
      </Grid>
    </Grid>
  )
}
