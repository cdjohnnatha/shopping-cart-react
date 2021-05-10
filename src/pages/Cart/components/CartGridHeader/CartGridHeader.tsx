import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const CartGridHeader = (): JSX.Element => {
  return (
    <Grid
      container
      key={`cart-header`}
      className="products-elements"
    >
      <Grid item xs={4}>
        <Typography>
          Product
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          Description
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>
          Price
        </Typography>
      </Grid>
    </Grid>
  )
}
