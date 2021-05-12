import React, { ReactElement, useContext, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
// import Link from '@material-ui/core/Link';

// import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { CartContext } from '../../pages/Cart/context/CartContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      color: 'white',
      cursor: 'pointer',
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

export default function TopBar(): ReactElement {
  const classes = useStyles();
  const { totalCartItems, cart, loadCart } = useContext(CartContext);
  useEffect(() => {
    /** @TODO change to load once */
    if (cart.products.length === 0) {
      loadCart();
    }
  }, [])
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Link
            className={classes.title}
            to="/"
          >
            GuitarShop
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link
              className={classes.title}
              to="/cart"
            >
              <IconButton
                aria-label="cart items"
                color="inherit"
              >
                <Badge badgeContent={totalCartItems()} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
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
