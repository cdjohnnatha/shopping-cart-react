import React, { ReactElement } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    inputRoot: {
      color: 'inherit',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
  }),
);

interface CartProps {
  cartItemsCount?: number;
};

interface Props {
  cartProps?: CartProps;
};

export default function TopBar({ cartProps }: Props): ReactElement {
  const classes = useStyles();

  let cartIcon = null;
  const cartItems = (cartProps?.cartItemsCount?? 0);
  const hasItemsInCart = cartItems > 0;

  if (hasItemsInCart) {
    cartIcon = (
      <Badge badgeContent={cartProps?.cartItemsCount} color="secondary">
        <ShoppingCart />
      </Badge>
    );
  }


  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            GuitarShop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton disabled={!hasItemsInCart} aria-label="cart items" color="inherit">
              {cartIcon}
            </IconButton>
            {/* <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
