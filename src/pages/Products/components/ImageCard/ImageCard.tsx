import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import { CartContext } from '../../../Cart/context/CartContext';
import { ProductInterface, ProductImagesInterface } from '../../ProductInterface';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

interface ImgMediaCardProps {
  product: ProductInterface,
  currency?: string,
};

export default function ImgMediaCard({ product, currency='R$' }: ImgMediaCardProps): React.ReactElement {
  const classes = useStyles();
  const { hasProductInCart, addItem, removeItem,  } = useContext(CartContext);


  const {
    _id,
    name: title,
    description,
    images,
    price,
  } = product;

  let buttonLabel = "Add to cart";
  let onClickButtonHandler = () => addItem(product);

  if (hasProductInCart(_id)) {
    buttonLabel = "Remove from cart";
    onClickButtonHandler = () => removeItem(_id);
  }
  const [image] = images.filter((image: ProductImagesInterface) => image.type === 'LIST');

  const priceLabel = `${currency}: ${price.toFixed(2)}`;
  const { path, ...imageProps } = image;
  return (
    <Card className={classes.root} id={_id} data-testid="cardElement">
      <CardMedia
        component="img"
        height="140"
        image={path}
        {...imageProps}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography noWrap variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Chip variant="outlined" size="small" label={priceLabel} />
        <Button
          size="small"
          color="primary"
          onClick={onClickButtonHandler}
        >
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
}