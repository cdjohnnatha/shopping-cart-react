import React from "react";
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

import { Products } from './products/Products';
import productsMock from './products/__mock__/products.mock';


const RootView = (): JSX.Element => {
  return (
    <article>
      <h1>Products available</h1>
      <Grid container spacing={2} justify="center">
        <Products productList={productsMock} />
        <Grid container alignItems="center" item xs={12} justify="center" style={{ marginTop: '1em', marginBottom: '2em' }}>
          <Pagination count={3} />
        </Grid>
      </Grid>
    </article>
  )
}

export default RootView;
