import RootView from '../../pages/RootView/RootView';
import Cart from '../../pages/Cart/Cart';
import Checkout from '../../pages/Checkout';

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: RootView,
  },
  {
    path: "/cart",
    key: "cart",
    exact: true,
    component: Cart,
  },
  {
    path: "/checkout",
    key: "cart",
    exact: true,
    component: Checkout,
  },
];

export default ROUTES;