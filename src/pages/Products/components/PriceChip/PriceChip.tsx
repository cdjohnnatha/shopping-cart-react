import React from 'react';
import Chip from '@material-ui/core/Chip';

interface PriceChipProps {
  label: string,
  price: number,
  productId: string,
}

export const PriceChip = ({ label, price, productId }: PriceChipProps): JSX.Element => {
  const priceLabel = `${label}: ${price.toFixed(2)}`;
  return (
    <Chip
      variant="outlined"
      size="small"
      label={priceLabel}
      id={`image-card-price-${productId}`}
    />
  )
}
