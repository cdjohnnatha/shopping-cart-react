import { ProductInterface } from '../../Products/ProductInterface'

export interface CartItem extends ProductInterface {
  quantity: number
};

export interface CartItemsInterface {
  [id: string]: CartItem;
};

export interface CartContextInterface {
  clearCart: () => void;
  removeItem: (id: string) => void;
  addItem: (product: ProductInterface) => void;
  hasProductInCart: (id: string) => boolean;
  cartItems: CartItemsInterface;
  totalCartItems: () => number;
  isCartEmpty: () => boolean;
  itemHasAvailableQuantity: (product: CartItem) => boolean,
  itemHasAvailableQuantityToAddCart: (product: CartItem) => boolean,
};
