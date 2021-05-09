import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

import ImageCard from './components/ImageCard/ImageCard';
import { ProductInterface } from './ProductInterface';

interface ProductProps {
  productList?: Array<ProductInterface>;
}

export function Products({ productList }: ProductProps): JSX.Element {
  const productsList = productList?.map((product, index) => {
    return (
      <Grid
        item
        xs={4}
        key={`product-list-${product.name}-${index}`}
        className="products-elements"
      >
        <ImageCard product={product} />
      </Grid>
    )
  });
  return (
    <Fragment>
      {productsList}
    </Fragment>
  )
}
