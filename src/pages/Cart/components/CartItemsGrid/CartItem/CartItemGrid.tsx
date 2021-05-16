import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { CartItemInterface } from '../../../CartInterface';
import { CartContext } from '../../../context/CartContext';
import CartItemQuantitySelect from './ItemQuantitySelect';
import { PriceLabel } from '../../PriceLabel/PriceLabel';
interface CartItemGridProps {
  cartItem?: CartItemInterface,
}

export const CartItemGrid = ({ cartItem }: CartItemGridProps): JSX.Element | null => {
  let renderCartItem = null;
  const { removeItem, cartItemDetails } = useContext(CartContext);

  if (cartItem) {
    const {
      productId,
      quantity,
      price,
    } = cartItem;

    const {
      images,
      name,
      description,
      maxQuantityPerCustomer,
      currency,
    } = cartItemDetails[productId]

    const [image] = images.filter((image) => image.type === 'THUMBNAIL');
    const imagePath = `${process.env.REACT_APP_API_SERVER}${image.path}`;
    renderCartItem = (
      <Grid
        container
        item
        xs={12}
        key={`cart-item-${name}-${productId}`}
        className="products-elements"
      >
        <Grid item xs={12} style={{ marginTop: '2em', marginBottom: '2em' }}>
          <Divider />
        </Grid>
        <Grid item xs={4}>
          <img src={imagePath} alt={image.tags} />
          <Typography variant="h6" noWrap>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={6} justify="center">
          <div style={{ width: '30em' }}>
            <Typography noWrap variant="body1">
              {description}
            </Typography>
          </div>
          <Grid container style={{ marginTop: '1em' }}>
            <CartItemQuantitySelect
              maxQuantityPerCustomer={maxQuantityPerCustomer}
              quantity={quantity}
              productId={productId}
            />
            <Divider orientation="vertical" flexItem style={{ marginLeft: '1em' }} />
            <Link
              style={{ marginLeft: '1em', cursor: 'pointer', alignSelf: 'center' }}
              onClick={() => removeItem(productId)}
            >
              Remove item
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <PriceLabel
            currencyLabel={currency.label}
            price={price}
            quantity={quantity}
          />
        </Grid>
      </Grid>
    )
  }

  return renderCartItem;
}
