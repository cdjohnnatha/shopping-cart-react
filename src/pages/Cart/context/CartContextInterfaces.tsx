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
  cartItemsArray: () => CartItem[];
  totalCartItems: () => number;
  isCartEmpty: () => boolean;
  itemHasAvailableQuantity: (product: CartItem) => boolean,
  itemHasAvailableQuantityToAddCart: (product: CartItem) => boolean,
  updateCartItemQuantity: (id: string, quantity: number) => void,
  totalAmountCartItems: () => number,
};
