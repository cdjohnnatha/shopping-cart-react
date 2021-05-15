import {
  CartItemInterface,
  CartInterface,
  CreditCardInterface,
  CreditCardInputOption
} from '../CartInterface';
import { ProductKeyValueInterface } from '../../Products/ProductInterface';

export interface CartContextInterface {
  clearCart: () => void;
  removeItem: (id: string) => void;
  addItem: (productId: string) => void;
  loadCartItemsDetails: () => void;
  loadCart: () => void;
  hasProductInCart: (id: string) => boolean;
  totalCartItems: () => number;
  isCartEmpty: () => boolean;
  updateCartItemQuantity: (id: string, quantity: number) => void,
  totalAmountCartItems: () => number,
  cart: CartInterface,
  products: CartItemInterface[],
  cartItemDetails: ProductKeyValueInterface,
  getCreditCard: (cardName: CreditCardInputOption) => CreditCardInterface,
  makeCheckout: (payment: CreditCardInputOption) => Promise<boolean>
};
