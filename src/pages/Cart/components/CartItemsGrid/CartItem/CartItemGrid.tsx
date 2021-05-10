import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { CartItem } from '../../../context/CartContextInterfaces';
import { CartContext } from '../../../context/CartContext';
import CartItemQuantitySelect from './ItemQuantitySelect';

interface CartItemGridProps {
  cartItem?: CartItem,
}

export const CartItemGrid = ({ cartItem }: CartItemGridProps): JSX.Element | null => {
  let renderCartItem = null;
  const { removeItem } = useContext(CartContext);

  if (cartItem) {
    const {
      images,
      name,
      description,
      quantity,
      maxQuantityPerCustomer,
      _id: productId,
      price,
    } = cartItem;

    const [image] = images.filter((image) => image.type === 'THUMBNAIL');
    const totalAmount = (price * quantity).toFixed(2);
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
          <img src={image.path} alt={image.tags} />
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
          <Typography variant="h6" noWrap>
            {totalAmount}
          </Typography>
        </Grid>
      </Grid>
    )
  }

  return renderCartItem;
}
