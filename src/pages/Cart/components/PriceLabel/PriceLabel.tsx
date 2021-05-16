import React from 'react';
import Typography from '@material-ui/core/Typography';

interface PriceLabelProps {
  currencyLabel: string,
  price: number,
  quantity: number,
}

export const PriceLabel = ({ currencyLabel, price, quantity } : PriceLabelProps): JSX.Element => {
  const totalAmount = (price * quantity).toFixed(2)
  const priceLabel = `${currencyLabel}: ${totalAmount}`;
  return (
    <Typography variant="h6" noWrap>
      {priceLabel}
    </Typography>
  )
}
