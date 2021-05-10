import RootView from '../../pages/RootView/RootView';
import Cart from '../../pages/Cart/Cart';

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
];

export default ROUTES;