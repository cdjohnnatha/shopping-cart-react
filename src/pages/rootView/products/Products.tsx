import React, { MouseEventHandler } from 'react';
import Grid from '@material-ui/core/Grid';

import ImageCard from '../../../components/card/ImageCard';

export interface ProductImages {
  path: string,
  tags: string,
  size: string,
  type: string,
};

export interface Product {
  name: string,
  quantityAvailable: number,
  category: string,
  description: string,
  price: number,
  images: Array<ProductImages>;
};

interface ProductProps {
  productList: Array<Product>;
  onAddCartClickHandler: MouseEventHandler<HTMLButtonElement>;
}

export function Products({ productList, onAddCartClickHandler }: ProductProps): JSX.Element {
  const productsList = productList.map(({
    images,
    ...product
  }, index) => {
    const [image] = images.filter((image) => image.type === 'list');
    return (
      <Grid item xs={4} key={`product-list-${product.name}-${index}`}>
        <ImageCard
          title={product.name}
          description={product.description}
          price={product.price}
          imageProps={{
            imagePath: image.path,
            alt: image.tags,
            title: image.tags,
          }}
          onButtonClickHandler={onAddCartClickHandler}
        />
      </Grid>
    )
  });
  return (
    <>
      {productsList}
    </>
  )
}
