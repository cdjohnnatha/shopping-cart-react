import { CartItemInterface, CartInterface } from '../CartInterface';
import { ProductKeyValueInterface } from '../../Products/ProductInterface';

export interface CartContextInterface {
  clearCart: () => void;
  removeItem: (id: string) => void;
  addItem: (productId: string) => void;
  loadCartItemsDetails: () => void;
  loadCart: () => void;
  hasProductInCart: (id: string) => boolean;
  // cartItemsArray: () => CartItemInterface[];
  totalCartItems: () => number;
  isCartEmpty: () => boolean;
  // itemHasAvailableQuantity: (product: CartItemInterface) => boolean,
  // itemHasAvailableQuantityToAddCart: (product: CartItemInterface) => boolean,
  updateCartItemQuantity: (id: string, quantity: number) => void,
  totalAmountCartItems: () => number,
  cart: CartInterface,
  products: CartItemInterface[],
  cartItemDetails: ProductKeyValueInterface,
};
