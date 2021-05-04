import React, { MouseEventHandler } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

interface ImageProps {
  alt?: string,
  height?: string,
  imagePath: string,
  title?: string,
}

interface Props {
  title: string;
  description: string;
  price: number;
  onButtonClickHandler: MouseEventHandler<HTMLButtonElement>;
  buttonLabel?: string;
  id?: string;
  currency?: string;
  imageProps: ImageProps;
};

export default function ImgMediaCard({
  title,
  description,
  price,
  onButtonClickHandler,
  buttonLabel = "Add to cart",
  id,
  currency = 'R$',
  imageProps,
}: Props): React.ReactElement {
  const classes = useStyles();

  const priceLabel = `${currency}: ${price.toFixed(2)}`;
  const { imagePath, ...imagePropsElements } = imageProps;
  return (
    <Card className={classes.root} id={id} data-testid="cardElement">
      <CardMedia
        component="img"
        height="140"
        image={imagePath}
        {...imagePropsElements}
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
          onClick={onButtonClickHandler}
        >
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
}