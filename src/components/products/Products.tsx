import React, { MouseEventHandler } from 'react';
import Grid from '@material-ui/core/Grid';

import ImageCard from '../card/ImageCard';

export interface ProductImagesInterface {
  path: string,
  tags: string,
  size: string,
  type: string,
};

export interface ProductInterface {
  name: string,
  quantityAvailable: number,
  category: string,
  description: string,
  price: number,
  images: Array<ProductImagesInterface>;
};

interface ProductProps {
  productList?: Array<ProductInterface>;
  onAddCartClickHandler: MouseEventHandler<HTMLButtonElement>;
}

export function Products({ productList, onAddCartClickHandler }: ProductProps): JSX.Element {
  const productsList = productList?.map(({
    images,
    ...product
  }, index) => {
    const [image] = images.filter((image) => image.type === 'LIST');
    return (
      <Grid item xs={4} key={`product-list-${product.name}-${index}`} className="products-elements">
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
